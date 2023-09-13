import Arrow from '@/assets/icons/arrow.svg';
import { CSSObject } from '@emotion/react';
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Theme,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { BaseMenu } from '@gdev219/common/src/components';
import { BaseIcon } from '@gdev219/common/src/components/Base/icon/BaseIcon';
import { useCallback, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FETCH_LOGOUT } from '../../api/auth';
import { useBoundStore } from '../../store';
import HeaderProfile from '../user/HeaderProfile';
import LayoutTitle from './LayoutTitle';
import { PageTitle } from './PageTitle';
import { Folder } from '@mui/icons-material';

const DRAWER_WIDTH_OPENED = 200;
const DRAWER_WIDTH_FOLDED = 48;
const DEFAULT_APP_BAR_HEIGHT = 60;
interface DeafultAppBarProps extends AppBarProps {
  open?: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH_OPENED,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `${DRAWER_WIDTH_FOLDED}px`,
  [theme.breakpoints.up('sm')]: {
    width: `${DRAWER_WIDTH_FOLDED}px`,
  },
});

const DefaultAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DeafultAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH_OPENED,
    width: `calc(100% - ${DRAWER_WIDTH_OPENED}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DefaultDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH_OPENED,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  color: '#fff',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
})) as typeof Drawer;

export const DefaultLayout = function () {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const { removeTokens } = useBoundStore();

  const navigate = useNavigate();
  const user = useBoundStore((state) => state.user);
  const handleClickDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  function handleClickLogout(): void {
    FETCH_LOGOUT().then(() => {
      removeTokens();
      navigate('/');
    });
  }

  return (
    <>
      <PageTitle />
      <Paper>
        <DefaultAppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: '#fff',
            height: DEFAULT_APP_BAR_HEIGHT,
            boxShadow: 0,
          }}
        >
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" color={(theme) => theme.palette.primary.main} sx={{ flexGrow: 1 }}>
              gdev219
            </Typography>
            <HeaderProfile user={user} />
          </Toolbar>
        </DefaultAppBar>
        <Toolbar variant="dense" />
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              width: DRAWER_WIDTH_OPENED,
            }}
          >
            {/* drawer handle */}
            <IconButton
              onClick={handleClickDrawer}
              aria-label="handle"
              sx={{
                position: 'absolute',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                transition: (theme) =>
                  theme.transitions.create(['left', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                left: isDrawerOpen ? DRAWER_WIDTH_OPENED : `${DRAWER_WIDTH_FOLDED}px`,
                padding: 0,
                top: DEFAULT_APP_BAR_HEIGHT * 2,
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: '14px',
                  height: '66px',
                  background: '#fff',
                  boxShadow: '1px 0px 4px rgba(0, 0, 0, 0.12)',
                  borderRadius: '0px 6px 5px 0px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={Arrow}
                  style={{
                    position: 'absolute',
                    rotate: isDrawerOpen ? '' : '180deg',
                  }}
                  alt="arrow"
                />
              </div>
            </IconButton>
            {/* drawer */}
            <DefaultDrawer
              variant="permanent"
              PaperProps={{
                sx: { backgroundColor: (theme) => theme.palette.primary.main },
              }}
              open={isDrawerOpen}
            >
              <Toolbar variant="dense" />
              <Box sx={{ paddingTop: '8px' }}>
                <BaseMenu
                  type={isDrawerOpen ? 'normal' : 'icon'}
                  items={[
                    {
                      id: '1',
                      title: '대메뉴1',
                      iconComponent: <Folder sx={{ color: '#fff' }} />,
                      items: [
                        {
                          id: 'design',
                          link: '/design',
                          title: 'Design Template',
                        },
                        {
                          id: 'child1',
                          link: '/child1',
                          title: '메뉴1',
                        },
                      ],
                    },
                  ]}
                />
              </Box>
              <Box
                sx={{
                  marginTop: 'auto',
                  padding: isDrawerOpen ? '20px 12px' : '20px 0px',
                  borderTop: '1px solid #6A92E1',
                }}
              >
                <Button
                  variant="text"
                  sx={{ color: '#fff' }}
                  startIcon={<BaseIcon name="logout" />}
                  onClick={handleClickLogout}
                >
                  {isDrawerOpen ? '로그아웃' : ''}
                </Button>
              </Box>
            </DefaultDrawer>
          </Box>
          <Box
            component="main"
            bgcolor="page.main"
            sx={{
              transition: (theme) =>
                theme.transitions.create('flex', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              flex: isDrawerOpen
                ? `0 0 calc(100% - ${DRAWER_WIDTH_OPENED}px)`
                : `0 0 calc(100% - ${DRAWER_WIDTH_FOLDED}px)`,
              padding: '24px 92px',
              minHeight: `calc(100vh - ${DEFAULT_APP_BAR_HEIGHT}px)`,
            }}
          >
            {/* title section */}
            <LayoutTitle />
            <Box bgcolor="palette.page.main" sx={{ padding: '20px 18px', borderRadius: '10px' }}>
              <Outlet></Outlet>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
