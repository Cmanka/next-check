import { darkTheme } from './dark.theme';
import { lightTheme } from './light.theme';

const theme = {
  layouts: {
    header: {
      height: '75px',
    },
    sidebar: {
      width: '90px',
    },
  },
  ...darkTheme,
};

export { theme, darkTheme, lightTheme };
