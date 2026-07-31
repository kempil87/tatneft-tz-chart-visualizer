export type SegmentButtonOption<T extends string = string> = {
  value: T;
  label: string;
  isDisabled?: boolean;
};
