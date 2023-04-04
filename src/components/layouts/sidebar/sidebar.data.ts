import aboutIcon from '@/assets/about.svg'
import homeIcon from '@/assets/home.svg'
import { Routes } from "@/utils/constants/routes.constant";

export const sidebarData = [{
	label: 'Home',
	href: Routes.Home,
	icon: homeIcon
}, {
	label: 'About',
	href: Routes.About,
	icon: aboutIcon
}]
