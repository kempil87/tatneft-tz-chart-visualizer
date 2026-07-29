import { z } from 'zod';

import { parseCsv } from '@/shared/lib/csv';
import type { ChartEntry } from '@/entities/chart';

const REQUIRED_HEADERS = ['parameter1', 'parameter2', 'parameter3'] as const;

const parsedCsvRowSchema = z.object({
  parameter1: z.coerce
    .number({ error: 'parameter1 должен быть числом' })
    .min(0, 'parameter1 должен быть не меньше 0')
    .max(1000, 'parameter1 должен быть не больше 1000'),
  parameter2: z.coerce
    .number({ error: 'parameter2 должен быть числом' })
    .min(0, 'parameter2 должен быть не меньше 0')
    .max(1000, 'parameter2 должен быть не больше 1000'),
  parameter3: z.coerce
    .number({ error: 'parameter3 должен быть числом' })
    .min(0, 'parameter3 должен быть не меньше 0')
    .max(1000, 'parameter3 должен быть не больше 1000'),
});

const normalizeHeader = (header: string) => header.trim().toLowerCase();

export const parseChartCsv = (content: string): ChartEntry[] => {
  const table = parseCsv(content);

  if (table.length < 2) {
    throw new Error('CSV должен содержать тело с данными');
  }

  const [headerRow, ...rows] = table;

  const normalizedHeaders = headerRow.map(normalizeHeader);
  const headers: string[] = [];

  for (const header of normalizedHeaders) {
    headers.push(...header.split(';'));
  }

  const headersSet = new Set(headers);

  const missing = REQUIRED_HEADERS.filter((header) => !headersSet.has(header));

  if (missing.length > 0) {
    throw new Error(`В CSV отсутствуют колонки: ${missing.join(', ')}`);
  }

  const columnIndex = {
    parameter1: normalizedHeaders.indexOf('parameter1'),
    parameter2: normalizedHeaders.indexOf('parameter2'),
    parameter3: normalizedHeaders.indexOf('parameter3'),
  };

  const createEntryId = (row: string[], index: number) =>
    crypto.randomUUID() +
    index.toString() +
    row[columnIndex.parameter1].toString() +
    row[columnIndex.parameter2].toString() +
    row[columnIndex.parameter3].toString();

  return rows.map((row, index) => {
    const payload = {
      parameter1: Number(row[columnIndex.parameter1]),
      parameter2: Number(row[columnIndex.parameter2]),
      parameter3: Number(row[columnIndex.parameter3]),
    } as ChartEntry;

    const parsed = parsedCsvRowSchema.safeParse(payload);

    if (!parsed.success) {
      throw new Error(`Неккоректный CSV файл`);
    }

    payload.id = createEntryId(row, index);
    payload.createdAt = Date.now();

    return payload;
  }) as ChartEntry[];
};
