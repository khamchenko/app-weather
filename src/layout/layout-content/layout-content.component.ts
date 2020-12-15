import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
import { visibility } from '../services/animations';

@Component({
  selector: 'layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.css'],
   animations: [visibility]
})
export class SpaContentComponent implements OnInit {

  constructor(private screenService: ScreenService, private menuService: MenuService) { }

  ngOnInit() {
  }

}
