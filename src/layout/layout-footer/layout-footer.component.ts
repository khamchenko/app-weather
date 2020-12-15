import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.css']
})
export class SpaFooterComponent implements OnInit {
  title = ' All rights reserved';
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
