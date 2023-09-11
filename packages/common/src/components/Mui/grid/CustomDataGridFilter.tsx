import { GridColDef } from '@mui/x-data-grid';
import BaseFormFilter from '../../Base/form/BaseFormFilter';

// 임이의 mock type이므로 후에 적절히 변경 부탁드립니다.
export interface CustomGridFilterItem {
  code: string;
  name: string;
}
export type CustomGridFilter = Pick<GridColDef, 'field' | 'headerName'> & {
  items: CustomGridFilterItem[];
  type?: 'all' | 'something';
};

export interface ICustomDataGridFilterProps {
  filters: CustomGridFilter[];
  onChangeFilters?: (filters: string[]) => void;
}

export const CustomDataGridFilter = function ({ filters, onChangeFilters }: ICustomDataGridFilterProps) {
  return (
    <>
      {filters.map((filter, index) => (
        <BaseFormFilter
          key={index}
          type={filter.type}
          label={filter.headerName || ''}
          items={filter.items.map((item) => ({ value: item.code, label: item.name }))}
          onChangeFilters={onChangeFilters}
        />
      ))}
    </>
  );
};
