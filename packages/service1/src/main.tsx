import { CssBaseline, ThemeProvider, theme } from '@gdev219/common/src/providers/index.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'pretendard/dist/web/variable/pretendardvariable.css';

import { HelmetProvider } from 'react-helmet-async';
import './index.scss';
import { routes } from './router/routes';

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/ReactTemplate/' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
