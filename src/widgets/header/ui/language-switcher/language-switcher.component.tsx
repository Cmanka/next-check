import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import LanguageIcon from '@/shared/assets/icons/language.svg';
import { AppLanguage } from '@/shared/constants/app-language.constant';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './language-switcher.styles';

const LanguageSwitcherComponent = () => {
  const { locale, pathname, push } = useRouter();
  const {
    svg: { fill },
  } = useContext(ThemeContext);

  const handleChangeLanguage = () => {
    if (locale === AppLanguage.English) {
      push(pathname, pathname, { locale: AppLanguage.Russian });
    } else {
      push(pathname, pathname, { locale: AppLanguage.English });
    }
  };

  return (
    <Styled.RightItem onClick={handleChangeLanguage}>
      <Icon SvgIcon={LanguageIcon} fill={fill} />
    </Styled.RightItem>
  );
};

export default LanguageSwitcherComponent;
