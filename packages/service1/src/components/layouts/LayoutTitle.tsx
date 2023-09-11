import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchTree } from '../../utils';

export default function LayoutTitle() {
  const [title, setTitle] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    async function getRoutes() {
      const { routes } = await import('../../router/routes');
      const currentRoute = searchTree(routes || [], (item) => item.path === pathname)[0];
      setTitle(currentRoute.title);
    }

    getRoutes();
  }, [location]);

  return (
    <Typography variant="h4" marginBottom="36px">
      {title}
    </Typography>
  );
}
