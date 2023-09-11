import { Checkbox, FormControlLabel } from '@mui/material';
import { ChangeEvent } from 'react';

export type FormFilterItem = {
  label: string;
  value: string;
};
export type IBaseFormFilterItemProps = {
  checked: boolean;
  handleFilterChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & FormFilterItem;

export default function BaseFormFilterItem({ label, checked, handleFilterChange }: IBaseFormFilterItemProps) {
  return (
    <FormControlLabel
      control={<Checkbox name="gilad" checked={checked} onChange={handleFilterChange} />}
      label={label}
    />
  );
}
