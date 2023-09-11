import { Box, FormControl, FormGroup, FormLabel } from '@mui/material';
import { ChangeEvent, useCallback, useMemo, useState, useRef } from 'react';
import BaseFormFilterItem, { FormFilterItem } from './BaseFormFilterItem';

export interface IBaseFormFIlterProps {
  type?: 'all' | 'something';
  label: string;
  items: FormFilterItem[];
  onChangeFilters?: (filters: string[]) => void;
}
const DEFAULT_CHECK_STATUS = false;

export default function BaseFormFilter({ label, items, type, onChangeFilters }: IBaseFormFIlterProps) {
  const didMountRef = useRef(false);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);
  const [checkedRecord, setCheckedRecord] = useState<Record<string, boolean>>(
    items.reduce((acc, { value }) => ({ ...acc, [value]: DEFAULT_CHECK_STATUS }), {}),
  );

  const handleChangeAll = function (event: ChangeEvent<HTMLInputElement>) {
    setCheckedAll(event.target.checked);
    setCheckedRecord(items.reduce((acc, { value }) => ({ ...acc, [value]: event.target.checked }), {}));
  };

  useCallback(() => {}, []);

  useMemo(() => {
    if (didMountRef.current) {
      if (type === 'all') {
        setCheckedAll(Object.values(checkedRecord).every((v) => v));
      }
      if (typeof onChangeFilters === 'function') {
        onChangeFilters(Object.keys(checkedRecord).filter((key) => checkedRecord[key]));
      }
    }

    didMountRef.current = true;
  }, [type, checkedRecord, onChangeFilters]);

  return (
    <>
      <Box>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup>
            {type === 'all' ? (
              <BaseFormFilterItem
                key="all"
                checked={checkedAll}
                handleFilterChange={handleChangeAll}
                label="전체"
                value="all"
              />
            ) : null}
            {items.map((item, index) => (
              <BaseFormFilterItem
                key={index}
                checked={checkedRecord[item.value] || DEFAULT_CHECK_STATUS}
                handleFilterChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setCheckedRecord((prev) => {
                    prev[item.value] = event.target.checked;
                    return { ...prev };
                  });
                }}
                label={item.label}
                value={item.value}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}
