import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { koKR as coreKoKR } from '@mui/material/locale';
import { koKR as dataGridKoKR } from '@mui/x-data-grid/locales';
import LinkBehavior from '../../components/Mui/link/LinkBehavior';

// https://mui.com/material-ui/customization/palette/
const customTheme = createTheme(
  {
    // tonalOffset, contrast threshold goes here
    typography: {
      fontFamily:
        '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: '800',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      h4: {
        fontSize: '24px',
        fontWeight: '700',
      },
      h5: {
        fontSize: '16px',
        fontWeight: '700',
      },
      h6: {
        fontSize: '14px',
        fontWeight: '400',
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { size: 'large' },
            style: {
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              padding: '18px 68px',
              borderRadius: '8px',
            },
          },
          {
            props: { size: 'extraSmall' },
            style: {
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              padding: '6px 12px',
              borderRadius: '6px',
              minWidth: 0,
            },
          },
          {
            props: { size: 'mini' },
            style: {
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              padding: '4px 8px',
              borderRadius: '6px',
              minWidth: 0,
            },
          },
        ],
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            padding: 0,
            '& .MuiInputBase-root': {
              borderRadius: '7px',
            },
            input: {
              padding: '12px 16px',
            },
          },
        },
      },
      MuiInputBase: {
        variants: [
          {
            props: { type: 'outlined', size: 'medium' },
            style: { fontSize: '14px', color: '#515151' },
          },
        ],
      },
      MuiListItem: { styleOverrides: { root: { padding: 0 } } },
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: 60,
            minHeight: 60,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            height: 60,
            minHeight: 60,
          },
          regular: {
            height: 60,
            minHeight: 60,
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
    breakpoints: {
      values: {
        xs: 600,
        sm: 900,
        md: 1200,
        lg: 1536,
        xl: 1920,
      },
    },
  },
  coreKoKR,
  dataGridKoKR,
);

export const theme = createTheme(customTheme, {
  palette: {
    primary: customTheme.palette.augmentColor({
      color: { main: blueGrey[500], contrastText: '#fff' },
      name: 'primary',
    }),
    background: {
      main: '#e0e0e0',
      container: '#e0e0e0',
    },
    white: { main: '#333333', light: '#d8d8d8', darker: '#B7B7B7', contrastText: '#fff' },
    grid: { header: '#F5F6F8' },
    page: customTheme.palette.augmentColor({
      color: { main: '#F5F6F8' },
      name: 'page',
    }),
    primary1: customTheme.palette.augmentColor({
      color: { main: '#3F76DF' },
      name: 'primary1',
    }),
    primary2: customTheme.palette.augmentColor({
      color: { main: '#0072C6' },
      name: 'primary2',
    }),
  },
});
