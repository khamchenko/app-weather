import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
import { visibility } from '../services/animations';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'],
  animations: [visibility]
})
export class HeaderComponent implements OnInit {
  flagForIcons = true;

  constructor(private screenService: ScreenService, private menuService: MenuService) { }

  ngOnInit() {
  }
}
