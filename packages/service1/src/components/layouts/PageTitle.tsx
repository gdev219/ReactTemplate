import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { searchTree } from '../../utils';

interface IPageTitleProps {
  suffix?: string;
}

export const PageTitle = function ({ suffix = 'React Template CMS' }: IPageTitleProps) {
  const [title, setTitle] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    async function getRoutes() {
      const { routes } = await import('../../router/routes');
      const currentRoute = searchTree(routes || [], (item) => item.path === pathname)[0];
      setTitle(currentRoute.title || suffix);
    }

    getRoutes();
  }, [location, suffix]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} - ${suffix}`}</title>
      </Helmet>
    </>
  );
};
