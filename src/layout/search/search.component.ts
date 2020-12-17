import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'layout-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() city: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup;
  status;
  
  constructor() {

  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      "city": new FormControl(this.city, Validators.required)
    })
  }

  onSubmit(fieldSearch) {
    if (this.searchForm.valid) {
      this.status = 'waiting';
      this.update.emit(fieldSearch.city);
    }
    this.searchForm.reset();
  }
}
