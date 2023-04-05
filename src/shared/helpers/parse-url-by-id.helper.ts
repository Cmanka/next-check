import { type Routes } from '@/shared/constants/routes.constant';

export const parseUrlById = (id: string, route: Routes) => route.replace(':id', id);
