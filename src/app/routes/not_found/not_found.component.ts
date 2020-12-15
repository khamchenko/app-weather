import { Component, OnInit } from '@angular/core';
import { visibility } from '../../../layout/services/animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not_found.component.html',
  styleUrls: ['./not_found.component.css'],
  animations: [visibility]
})

export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
