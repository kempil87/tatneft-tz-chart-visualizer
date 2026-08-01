import { selectChartEntries, useChartStore } from '@/entities/chart';
import { Button } from '@/shared/ui/button';
import { Surface } from '@/shared/ui/surface';
import { Typography } from '@/shared/ui/typography';

import { Actions, Container } from './chart-draft-banner.styles';
import { useChartDraft } from './use-chart-draft';

export const ChartDraftBanner = () => {
  const entries = useChartStore(selectChartEntries);

  const { isVisible, handleRestore, handleDiscard } = useChartDraft();

  if (!isVisible || entries.length > 0) {
    return null;
  }

  return (
    <Container>
      <Surface
        display="flex"
        direction="row"
        wrap="wrap"
        type="raised"
        padding="md"
        inlinePadding="lg"
        justify="space-between"
        align="center"
      >
        <Typography weight="bold">Найден черновик данных. Восстановить?</Typography>

        <Actions>
          <Button type="button" variant="solid" isStretched={false} onClick={handleRestore}>
            Восстановить
          </Button>

          <Button
            type="button"
            variant="flat"
            color="danger"
            isStretched={false}
            onClick={handleDiscard}
          >
            Отклонить
          </Button>
        </Actions>
      </Surface>
    </Container>
  );
};
