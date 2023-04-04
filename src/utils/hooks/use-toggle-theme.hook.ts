import { useEffect, useMemo, useState } from 'react';

import { darkTheme, lightTheme, theme } from '@/styles/theme';
import { AppTheme } from '@/utils/constants/app-theme.constant';
import { StorageKeys } from '@/utils/constants/storage-keys.constant';

export const useToggleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(AppTheme.Dark);

  useEffect(() => {
    const defaultTheme = localStorage.getItem(StorageKeys.Theme) as AppTheme;

    if (defaultTheme) {
      setCurrentTheme(defaultTheme);
    }
  }, []);

  const themeStyles = useMemo(() => {
    if (currentTheme === AppTheme.Dark) {
      return { ...theme, ...darkTheme };
    } else {
      return { ...theme, ...lightTheme };
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    if (currentTheme === AppTheme.Dark) {
      setCurrentTheme(AppTheme.Light);
      localStorage.setItem(StorageKeys.Theme, AppTheme.Light);
    } else {
      setCurrentTheme(AppTheme.Dark);
      localStorage.setItem(StorageKeys.Theme, AppTheme.Dark);
    }
  };

  return { theme: themeStyles, toggleTheme };
};
