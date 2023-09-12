import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { BaseIcon } from '../../Base/icon/BaseIcon';

interface GridHeaderCount {
  [key: string]: number | undefined;
  select?: number;
  search?: number;
  total?: number;
}

export interface GridHeaderSort {
  title: string;
  value: string;
}

export interface ICustomDataGridHeaderProps {
  count: GridHeaderCount;
  sortList?: GridHeaderSort[];
  sortSlot?: ReactNode;
  onSelectSort?: (sort: GridHeaderSort) => void;
}

const COUNTER_MAP: Record<string, string> = { total: '전체', search: '검색', select: '선택' };
export default function CustomDataGridHeader({ count, sortList, sortSlot, onSelectSort }: ICustomDataGridHeaderProps) {
  const [sort, setSort] = useState<GridHeaderSort>(sortList ? sortList[0] : { title: '', value: '' });

  const handleSortChange = function (event: SelectChangeEvent) {
    const value = event.target.value as string;
    setSort(sortList?.find((v) => v.value === value) || { title: '', value: '' });
    if (typeof onSelectSort === 'function') onSelectSort(sort);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Stack
        direction="row"
        gap={1}
        divider={<span style={{ width: '2px', backgroundColor: '#EEEEEF', height: '15px' }}></span>}
        sx={{ color: '#333', fontSize: '14px', alignItems: 'center' }}
      >
        {Object.keys(count).map((key: string) => (
          <Box key={key}>
            <Typography variant="h6">{COUNTER_MAP[key] + ' ' + count[key]}</Typography>
          </Box>
        ))}
      </Stack>
      <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.1 }}>
          <BaseIcon name="filter" />
          정렬
        </Box>
        {sortSlot ? (
          sortSlot
        ) : (
          <Select
            size="small"
            value={sort.value}
            onChange={handleSortChange}
            IconComponent={({ className }) => {
              const isOpen: boolean = !!className.includes('MuiSelect-iconOpen');
              return <BaseIcon name="arrowDropDown" style={{ rotate: isOpen ? '180deg' : '' }} />;
            }}
            sx={{
              fontSize: '14px',
              color: '#333',
              '& .MuiSelect-select': {
                padding: '2px 10px',
              },
              '& .MuiSelect-select.MuiInputBase-inputSizeSmall': {
                padding: '0px 10px !important',
              },
              '& .MuiOutlinedInput-root': {
                // border: '1px solid #D8D8D8',
                borderRadius: '8px',
              },
            }}
          >
            {sortList?.map((item, index) => (
              <MenuItem key={index} value={item.value} sx={{ fontSize: '14px', width: '100%' }}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        )}
      </Box>
    </Box>
  );
}
