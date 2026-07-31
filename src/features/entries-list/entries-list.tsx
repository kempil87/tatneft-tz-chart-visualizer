import {
  selectChartEntries,
  selectClearChartEntries,
  selectRemoveChartEntry,
  useChartStore,
} from '@/entities/chart';
import { Button } from '@/shared/ui/button';
import { Surface } from '@/shared/ui/surface';
import { Typography } from '@/shared/ui/typography';

import { EntryCard } from './entry-card';
import { Header, List } from './entries-list.styles';

export const EntriesList = () => {
  const entries = useChartStore(selectChartEntries);
  const removeAll = useChartStore(selectClearChartEntries);
  const removeEntry = useChartStore(selectRemoveChartEntry);

  if (entries.length === 0) {
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
          <EntryCard key={entry.id} entry={entry} order={index + 1} onRemove={removeEntry} />
        ))}
      </List>
    </Surface>
  );
};
