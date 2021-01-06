import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { visibility } from '../../services/animations';

@Component({
  selector: 'layout-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [visibility]
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  isActiveRoute = false;

  constructor(public menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
    this.checkingActiveRoute(location.pathname);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkingActiveRoute(location.pathname);
      }
    });

  }
  checkingActiveRoute(route: string): void {
    this.isActiveRoute = (route === this.item.route);
  }

  onClick() {
      this.router.navigate([this.item.route]);
      this.menuService.toggleMenu();
  }
}
