import { Component, OnInit, Input, ElementRef, Renderer, HostListener } from '@angular/core';
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

  constructor(private menuService: MenuService,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer) { }

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
