import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  selectAddChartEntry,
  selectFormResetKey,
  useChartStore,
  type ChartEntryPayload,
} from '@/entities/chart';
import { Button } from '@/shared/ui/button';
import { FormInput } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';

import { chartFormSchema, type ChartFormInput } from './chart-form.schema';
import { Form, Header, Root } from './chart-form.styles';

export const ChartForm = () => {
  const formApi = useForm<ChartFormInput>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      parameter1: '',
      parameter2: '',
      parameter3: '',
    },
  });

  const addEntry = useChartStore(selectAddChartEntry);

  const isInvalid = Object.keys(formApi.formState.errors).length > 0;

  const onSubmit = (values: ChartFormInput) => {
    addEntry(values as ChartEntryPayload);

    formApi.reset();
  };

  useEffect(() => {
    let previousKey = selectFormResetKey(useChartStore.getState());

    return useChartStore.subscribe((state) => {
      const nextKey = selectFormResetKey(state);

      if (nextKey !== previousKey && nextKey > 0) {
        formApi.reset();
      }

      previousKey = nextKey;
    });
  }, [formApi]);

  return (
    <FormProvider {...formApi}>
      <Root type="raised" padding="lg" display="flex" direction="column" gap="md">
        <Header>
          <Typography variant="h3" weight="bold">
            Ввод данных
          </Typography>

          <Typography variant="bodySm" color="secondary">
            Заполните три параметра и добавьте новую запись.
          </Typography>
        </Header>

        <Form noValidate onSubmit={formApi.handleSubmit(onSubmit)}>
          <FormInput
            name="parameter1"
            label="Параметр 1"
            type="number"
            placeholder="Введите значение"
          />

          <FormInput
            name="parameter2"
            label="Параметр 2"
            type="number"
            placeholder="Введите значение"
          />

          <FormInput
            name="parameter3"
            label="Параметр 3"
            type="number"
            placeholder="Введите значение"
          />

          <Button isDisabled={isInvalid} isStretched type="submit">
            Добавить данные
          </Button>
        </Form>
      </Root>
    </FormProvider>
  );
};
