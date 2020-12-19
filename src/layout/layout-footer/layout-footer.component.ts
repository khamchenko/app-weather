import { Component, OnInit } from '@angular/core';
import { visibility } from '../services/animations';

@Component({
  selector: 'layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.css'],
  animations: [visibility]
})
export class FooterComponent implements OnInit {
  title = ' All rights reserved';
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
