const splitCsvLine = (line: string): string[] => {
  const cells: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === ',' && !inQuotes) {
      cells.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  cells.push(current.trim());

  return cells;
};

export const parseCsv = (content: string): string[][] => {
  return content
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .reduce((acc, line) => {
      const trimmed = line.trim();

      if (trimmed?.length > 0) {
        const cells = splitCsvLine(trimmed);
        acc.push(cells);
      }
      return acc;
    }, [] as string[][]);
};
