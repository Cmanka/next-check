import 'styled-components';

import { type theme } from '@/styles/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    toggleTheme: () => void;
  }
}
