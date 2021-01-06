import { Component, OnInit, Input } from '@angular/core';
import { SnackService } from '../services/snack.service';

@Component({
  selector: 'snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
 })

export class SnackBarComponent implements OnInit {
  constructor(public snackService: SnackService) { }

  ngOnInit() {
     
  }
}
