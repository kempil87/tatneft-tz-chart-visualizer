import { useMemo } from 'react';

import {
  selectChartEntries,
  selectClearChartEntries,
  selectRemoveChartEntry,
  useChartStore,
} from '@/entities/chart';
import { Button } from '@/shared/ui/button';
import { Surface } from '@/shared/ui/surface';
import { Typography } from '@/shared/ui/typography';

import { Header, List, Meta, Params } from './entries-list.styles';

const formatDate = (timestamp: number) =>
  new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(timestamp);

export const EntriesList = () => {
  const entries = useChartStore(selectChartEntries);
  const removeAll = useChartStore(selectClearChartEntries);
  const removeEntry = useChartStore(selectRemoveChartEntry);

  const shouldListVisible = useMemo(() => entries.length > 0, [entries]);

  const handleRemoveEntry = (id: string) => {
    removeEntry(id);
  };

  if (!shouldListVisible) {
    return null;
  }

  return (
    <Surface type="raised" padding="lg" display="flex" direction="column" gap="md">
      <Header>
        <Typography variant="h4" weight="semibold">
          Записи
        </Typography>

        <Button variant="flat" color="danger" onClick={removeAll}>
          Удалить все
        </Button>
      </Header>

      <List>
        {entries.map((entry, index) => (
          <Surface
            as="li"
            color="brand"
            padding="sm"
            inlinePadding="md"
            display="flex"
            justify="space-between"
            align="center"
            gap="xs"
            key={entry.id}
          >
            <Meta>
              <Typography variant="label" weight="medium">
                Запись #{index + 1}
              </Typography>

              <Typography variant="caption" color="secondary">
                {formatDate(entry.createdAt)}
              </Typography>
            </Meta>

            <Params>
              <Typography variant="bodySm">Parameter 1: {entry.parameter1}</Typography>
              <Typography variant="bodySm">Parameter 2: {entry.parameter2}</Typography>
              <Typography variant="bodySm">Parameter 3: {entry.parameter3}</Typography>

              <Button variant="flat" color="danger" onClick={() => handleRemoveEntry(entry.id)}>
                Удалить
              </Button>
            </Params>
          </Surface>
        ))}
      </List>
    </Surface>
  );
};
