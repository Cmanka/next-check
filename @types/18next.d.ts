import 'i18next';

import about from '../public/locales/en/about.json';
import common from '../public/locales/en/common.json';
import home from '../public/locales/en/home.json';
import news from '../public/locales/en/news.json';
import portfolios from '../public/locales/en/portfolios.json';

interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
  about: typeof about;
  portfolios: typeof portfolios;
  news: typeof news;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: I18nNamespaces;
  }
}
