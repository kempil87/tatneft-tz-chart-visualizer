import { formatDate } from '@/shared/lib/format-date';
import { Button } from '@/shared/ui/button';
import { Surface } from '@/shared/ui/surface';
import { Typography } from '@/shared/ui/typography';

import type { ChartEntry } from '../model/types';
import { Meta, Params } from './entry-card.styles';

interface EntryCardProps {
  entry: ChartEntry;
  order: number;
  onRemove: (id: string) => void;
}

export const EntryCard = ({ entry, order, onRemove }: EntryCardProps) => {
  const formattedDate = formatDate(entry.createdAt);

  const handleRemove = () => {
    onRemove(entry.id);
  };

  return (
    <Surface
      as="li"
      color="brand"
      padding="sm"
      inlinePadding="md"
      display="flex"
      justify="space-between"
      align="center"
      gap="xs"
    >
      <Meta>
        <Typography variant="label" weight="medium">
          Запись #{order}
        </Typography>

        <Typography variant="caption" color="secondary">
          {formattedDate}
        </Typography>
      </Meta>

      <Params>
        <Typography variant="bodySm">Parameter 1: {entry.parameter1}</Typography>
        <Typography variant="bodySm">Parameter 2: {entry.parameter2}</Typography>
        <Typography variant="bodySm">Parameter 3: {entry.parameter3}</Typography>

        <Button variant="flat" color="danger" onClick={handleRemove}>
          Удалить
        </Button>
      </Params>
    </Surface>
  );
};
