import { Component, OnInit, Input } from '@angular/core';
import _ from "lodash";

@Component({
  selector: 'layout-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() header;
  @Input() rows;

  sorted = {
      type: "asc",
      index: 0
  }

  constructor() {

  }

  ngOnInit() {

  }

  sort(index, description) {
      let type_sort = this.sorted.type == "asc" ? "desc" : "asc";
      this.sorted.type = type_sort;
      this.sorted.index = index;

      this.rows = _.orderBy(this.rows, [description], [type_sort]);
  }
}
