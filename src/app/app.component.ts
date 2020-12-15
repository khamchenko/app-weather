import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../layout/services/layout-config.service';
import { MenuService } from '../layout/services/menu.service';
import { AppMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spaConfigService: SpaConfigService, private menuService: MenuService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        {
          imageFile: 'src/imgs/facebook.svg',
          alt: 'Facebook',
          url: 'https://www.facebook.com/groups/270748973021342'
        },
        {
          imageFile: 'src/imgs/github.svg',
          alt: 'Github',
          url: 'https://github.com/search?q=openweathermap&ref=cmdform'
        },
        {
          imageFile: 'src/imgs/twitter.svg',
          alt: 'Twitter',
          url: 'https://twitter.com/OpenWeatherMap'
        }
      ],
      showUserControls: true
    };
    spaConfigService.configure(config);
    menuService.items = AppMenuItems;
  }

}
