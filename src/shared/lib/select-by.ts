export const selectBy = <TKey, TValue>(
  key: TKey,
  entries: ReadonlyArray<readonly [TKey, TValue]>,
): TValue | undefined => new Map(entries).get(key);
