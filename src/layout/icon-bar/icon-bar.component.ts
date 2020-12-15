import { Component, OnInit, Input } from '@angular/core';
import { SpaConfigService } from '../services/layout-config.service';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})

export class IconBarComponent implements OnInit {
  @Input() showIcons;

  constructor(private spaConfigService: SpaConfigService) { }

  ngOnInit() {

  }
}
