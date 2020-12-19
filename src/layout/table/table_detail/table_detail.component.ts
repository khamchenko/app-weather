import { Component, OnInit, Input } from '@angular/core';
import _ from "lodash";

@Component({
  selector: 'layout-table-detail',
  templateUrl: './table_detail.component.html',
  styleUrls: ['./table_detail.component.css']
})
export class TableDetailComponent implements OnInit {
   @Input() elem;

  constructor() {

  }

  ngOnInit() {

  }
}
