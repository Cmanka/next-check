import { AppLanguage } from '@/shared/constants/app-language.constant';

export const removeLocale = (url: string) => url.replace(AppLanguage.Russian, '');
