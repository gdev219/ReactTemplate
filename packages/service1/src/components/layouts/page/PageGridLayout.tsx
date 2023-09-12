import { Box, Paper, Typography } from '@mui/material';
import { BaseIcon } from '@gdev219/common/src/components/Base/icon/BaseIcon';
import { ReactNode, useCallback, useState } from 'react';

interface IPageGridLayoutProps {
  filter?: ReactNode;
  header?: ReactNode;
  grid?: ReactNode;
  pagination?: ReactNode;
  control?: ReactNode;
}

const FILTER_OPEN_WIDTH = '168px';
const FILTER_FOLD_WIDTH = '100px';
export default function PageGridLayout({ header, filter, grid, pagination, control }: IPageGridLayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClickOpenFilter = useCallback(
    function () {
      setIsOpen(!isOpen);
    },
    [isOpen],
  );
  console.log('control', control);
  return (
    <>
      <Paper sx={{ display: 'flex', background: 'inherit' }}>
        {filter && (
          <Box
            sx={{
              flex: `0 0 ${isOpen ? FILTER_OPEN_WIDTH : FILTER_FOLD_WIDTH}`,
              maxWidth: `${isOpen ? FILTER_OPEN_WIDTH : FILTER_FOLD_WIDTH}`,
              transition: 'flex 0.3s, max-width 0.3s',
              padding: '24px',
              marginRight: '2px',
              background: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
              <Typography variant="h5">필터</Typography>
              <BaseIcon
                name="arrowDouble"
                sx={{
                  marginLeft: 'auto',
                  width: '13px',
                  height: '15px',
                  cursor: 'pointer',
                  rotate: isOpen ? '' : '180deg',
                  transition: 'rotate 0.1s',
                }}
                onClick={handleClickOpenFilter}
              />
            </Box>
            {isOpen && filter}
          </Box>
        )}
        <Box sx={{ flex: 1, padding: '22px 24px', background: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {header && <Box sx={{ width: '100%', marginBottom: '20px' }}>{header}</Box>}
            {grid && <Box sx={{ width: '100%', marginBottom: '20px' }}>{grid}</Box>}
            {pagination && <Box>{pagination}</Box>}
          </Box>
        </Box>
      </Paper>
    </>
  );
}
