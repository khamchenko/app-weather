import { Component, OnInit } from '@angular/core';
import { SnackService } from '../../../layout/services/snack.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(public snackService: SnackService) { }

  ngOnInit() {
  }

}
