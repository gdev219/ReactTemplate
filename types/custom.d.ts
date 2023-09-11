import { ThemeOptions } from '@mui/material';
declare module '*.svg' {
  const content: any;
}
declare module '*.png' {
  const content: any;
}
declare module '*.css' {
  const content: { [className: string]: string };
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    background: Palette['background'];
    primary1: Palette['primary'];
    primary2: Palette['primary'];
    white: Palette['primary'];
    page: Palette['primary'];
    grid: {
      header: string;
    };
  }
  interface PaletteOptions {
    background?: PaletteOptions['background'];
    primary1?: PaletteOptions['primary'];
    primary2?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    page?: PaletteOptions['primary'];
    grid?: {
      header: string;
    };
  }
}

declare module '@mui/material/styles/createTheme' {
  export default function createTheme(options?: ThemeOptions, ...args: object[]): Theme;
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primary1: true;
    primary2: true;
    white: true;
    page: true;
    grid: true;
  }

  interface ButtonPropsSizeOverrides {
    mini: true;
    extraSmall: true;
  }
}
