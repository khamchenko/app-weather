import { MenuItem } from '../layout/services/menu.service';

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Главная',
    icon: 'src/imgs/home.svg',
    route: '/',
    submenu: null
  },
  {
    text: 'Погода',
    icon: 'src/imgs/weather.svg',
    route: '/weather',
    submenu: null
  }
];
