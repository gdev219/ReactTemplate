import { Pagination, PaginationItem, PaginationProps, styled, PaginationRenderItemParams } from '@mui/material';

const StyledPagination = styled(Pagination)(() => ({}));

const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  fontSize: '1rem',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '100%',
  minWidth: '26px',
  margin: '0 2px',
  padding: 0,
  '&.MuiButtonBase-root, &.MuiButtonBase-root:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-selected': {
    border: 0,
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

export default function CustomDataGridPagination({ ...props }: PaginationProps) {
  const systemDefaults = {
    showFirstButton: true,
    showLastButton: true,
    renderItem: (item: PaginationRenderItemParams) => <StyledPaginationItem {...item} variant="text" shape="rounded" />,
  };
  return <StyledPagination {...systemDefaults} {...props}></StyledPagination>;
}
