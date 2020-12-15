import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class SpaHeaderComponent implements OnInit {
  flagForIcons = true;
  constructor(private screenService: ScreenService, private menuService: MenuService) { }

  ngOnInit() {
  }

}
