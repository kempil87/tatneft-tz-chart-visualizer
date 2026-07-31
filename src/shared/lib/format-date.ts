type FormatDateOptions = Intl.DateTimeFormatOptions & {
  locale?: string;
};

const DEFAULT_LOCALE = 'ru-RU';

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const formatterCache = new Map<string, Intl.DateTimeFormat>();

const getFormatter = (locale: string, options: Intl.DateTimeFormatOptions) => {
  const cacheKey = `${locale}:${JSON.stringify(options)}`;
  const cached = formatterCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const formatter = new Intl.DateTimeFormat(locale, options);
  formatterCache.set(cacheKey, formatter);

  return formatter;
};

export const formatDate = (timestamp: number, options: FormatDateOptions = {}): string => {
  const { locale = DEFAULT_LOCALE, ...formatOptions } = options;

  return getFormatter(locale, { ...DEFAULT_OPTIONS, ...formatOptions }).format(timestamp);
};
