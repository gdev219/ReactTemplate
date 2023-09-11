import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PageTitle } from './PageTitle';

export const FullSizeLayout = function () {
  return (
    <>
      <PageTitle />
      <Paper sx={{ height: '100vh', maxWidth: '100vw', padding: 0, bgcolor: 'background.container' }}>
        <Outlet></Outlet>
      </Paper>
    </>
  );
};
