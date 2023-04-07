import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';

import { UserInit } from '@/entities/user';
import { useToggleTheme } from '@/shared/lib/hooks/use-toggle-theme.hook';
import { GlobalStyles } from '@/shared/styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={{ toggleTheme, ...theme }}>
      <UserInit>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserInit>
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
