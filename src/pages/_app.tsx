import './_app.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/global';
import { useToggleTheme } from '@/utils/hooks/use-toggle-theme.hook';

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={{ toggleTheme, ...theme }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
