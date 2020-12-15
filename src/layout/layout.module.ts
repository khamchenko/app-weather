import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpaBodyComponent } from './layout-body/layout-body.component';
import { SpaHeaderComponent } from './layout-header/layout-header.component';
import { SpaContentComponent } from './layout-content/layout-content.component';
import { SpaFooterComponent } from './layout-footer/layout-footer.component';

import { SpaConfigService } from './services/layout-config.service';
import { MenuService } from './services/menu.service';
import { ScreenService } from './services/screen.service';

import { ScreenSmallDirective } from './directives/screen-small.directive';
import { ScreenLargeDirective } from './directives/screen-large.directive';

import { IconBarComponent } from './icon-bar/icon-bar.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent, SpaFooterComponent, IconBarComponent, ScreenSmallDirective, ScreenLargeDirective, MenuComponent, MenuItemComponent, PopupMenuComponent, SearchComponent, TableComponent
  ],
  exports: [SpaBodyComponent, ScreenLargeDirective, ScreenSmallDirective, SearchComponent, TableComponent],
  providers: [SpaConfigService, ScreenService, MenuService]
})
export class LayoutModule { }
