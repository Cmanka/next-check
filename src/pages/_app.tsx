import './_app.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';

import { useToggleTheme } from '@/shared/hooks/use-toggle-theme.hook';
import { GlobalStyles } from '@/styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={{ toggleTheme, ...theme }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
