import { GridColDef, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid';
import { DataGrid } from '@gdev219/common/src/components';
import { CustomDataGridFilter, CustomGridFilter } from '@gdev219/common/src/components/Mui/grid/CustomDataGridFilter';
import CustomDataGridPagination from '@gdev219/common/src/components/Mui/grid/CustomDataGridPagination';
import PageGridLayout from '../../components/layouts/page/PageGridLayout';
import CustomDataGridHeader from '@gdev219/common/src/components/Mui/grid/CustomDataGridHeader';
import { useEffect, useState } from 'react';

function Main() {
  const apiRef = useGridApiRef();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, sortable: false },
    {
      field: 'firstName',
      headerName: '직무',
      width: 150,
      sortable: false,
      filterable: false,
    },
    {
      field: 'lastName',
      headerName: '계정상태',
      width: 150,
      sortable: false,
      filterable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      sortable: false,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const filters: CustomGridFilter[] = [
    {
      field: 'lastName',
      headerName: '계정상태',
      type: 'all',
      items: [
        { code: '1', name: '단독' },
        { code: '2', name: '대표' },
        { code: '3', name: '공유' },
        { code: '4', name: '다필지' },
        { code: '5', name: '기타' },
      ],
    },
    { field: 'lastName2', headerName: '직책', items: [{ code: '2', name: 'x' }] },
  ];

  const [selectCount, setSelectCount] = useState<number>(0);

  const handleChangeFilters = function (changedFilters: string[]) {
    console.log('changed filters', changedFilters);
  };

  useEffect(() => {
    apiRef.current.subscribeEvent('rowSelectionChange', function (rows) {
      setSelectCount(rows.length);
    });
  }, [apiRef]);

  return (
    <>
      <PageGridLayout
        filter={<CustomDataGridFilter filters={filters} onChangeFilters={handleChangeFilters} />}
        header={
          <CustomDataGridHeader
            count={{ select: selectCount, search: 0, total: 0 }}
            sortList={[
              { title: '최신순', value: 'new' },
              { title: '등록일순', value: 'old' },
            ]}
          />
        }
        grid={
          <DataGrid
            apiRef={apiRef}
            rows={rows}
            columns={columns}
            hideFooterPagination
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            hideFooter
          />
        }
        pagination={<CustomDataGridPagination variant="text" count={10} defaultPage={10} boundaryCount={10} />}
      />
    </>
  );
}

export default Main;
