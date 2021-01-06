import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ScreenService } from '../../services/screen.service';
import { visibility } from '../../services/animations';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [visibility]
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService, public screenService: ScreenService) { }

  ngOnInit() {
  }

}
