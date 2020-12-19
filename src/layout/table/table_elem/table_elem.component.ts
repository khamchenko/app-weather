import { Component, OnInit, Input } from '@angular/core';
import _ from "lodash";

@Component({
  selector: 'layout-table-elem',
  templateUrl: './table_elem.component.html',
  styleUrls: ['./table_elem.component.css']
})
export class TableElemComponent implements OnInit {
   @Input() elem;

  constructor() {

  }

  ngOnInit() {

  }
}
