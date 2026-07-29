import { z } from 'zod';

const requiredNumber = (label: string) =>
  z.preprocess(
    (value) => {
      if (value === '' || value === null || value === undefined) {
        return undefined;
      }

      if (typeof value === 'number' && Number.isNaN(value)) {
        return undefined;
      }

      if (typeof value === 'string') {
        const parsed = Number(value);
        return Number.isNaN(parsed) ? value : parsed;
      }

      return value;
    },
    z
      .number({
        error: `${label} обязателен`,
      })
      .min(0, `${label} должен быть не меньше 0`)
      .max(1000, `${label} должен быть не больше 1000`),
  );

export const chartFormSchema = z.object({
  parameter1: requiredNumber('Параметр 1'),
  parameter2: requiredNumber('Параметр 2'),
  parameter3: requiredNumber('Параметр 3'),
});

export type ChartFormInput = z.input<typeof chartFormSchema>;

export type ChartFormValues = z.output<typeof chartFormSchema>;
