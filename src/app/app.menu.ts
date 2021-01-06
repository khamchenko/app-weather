import { MenuItem } from '../layout/services/menu.service';

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Главная',
    icon: 'assets/imgs/home.svg',
    route: '/',
    submenu: null
  },
  {
    text: 'Погода',
    icon: 'assets/imgs/weather.svg',
    route: '/weather',
    submenu: null
  }
];
