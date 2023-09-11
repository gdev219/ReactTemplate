import { FETCH_USER } from '../api/user';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { FullSizeLayout } from '../components/layouts/FullSizeLayout';
import Login from '../pages/Login/Login.page';
import Main from '../pages/Main/Main.page';
import { useBoundStore } from '../store';
import { CustomRouteObject } from '../types';
import { redirect } from 'react-router-dom';

export const defaultRedirectURL = '/child1';

const fetchUser = async () => {
  try {
    const { data } = await FETCH_USER();

    useBoundStore.setState({ user: data });

    return data;
  } catch (error) {
    return redirect('/');
  }
};

const checkLoggedIn = async () => {
  try {
    await FETCH_USER();
    return redirect(defaultRedirectURL);
  } catch (error) {
    return '';
  }
};

export const routes = [
  {
    element: <FullSizeLayout />,
    loader: checkLoggedIn,
    children: [
      {
        path: '/',
        element: <Login />,
        title: '로그인',
      },
    ],
  },
  {
    element: <DefaultLayout />,
    loader: fetchUser,
    children: [
      {
        path: '/child1',
        element: <Main />,
        title: '메뉴1',
      },
      {
        path: '/child2',
        element: <Main />,
        title: '메뉴2',
      },
      {
        path: '/child3',
        element: <Main />,
        title: '메뉴3',
      },
      {
        path: '/child4',
        element: <Main />,
        title: '메뉴4',
      },
      {
        path: '/child5',
        element: <Main />,
        title: '메뉴5',
      },
      {
        path: '/child6',
        element: <Main />,
        title: '메뉴6',
      },
      {
        path: '/child7',
        element: <Main />,
        title: '총메뉴7',
      },
    ],
  },
] as CustomRouteObject[];
