import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyComponent } from './layout-body/layout-body.component';
import { HeaderComponent } from './layout-header/layout-header.component';
import { ContentComponent } from './layout-content/layout-content.component';
import { FooterComponent } from './layout-footer/layout-footer.component';

import { LayoutConfigService } from './services/layout-config.service';
import { MenuService } from './services/menu.service';
import { HeaderService } from './services/header.service';
import { ScreenService } from './services/screen.service';
import { SnackService } from './services/snack.service';

import { ScreenSmallDirective } from './directives/screen-small.directive';
import { ScreenLargeDirective } from './directives/screen-large.directive';

import { IconBarComponent } from './icon-bar/icon-bar.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { TableElemComponent } from './table/table_elem/table_elem.component';
import { TableDetailComponent } from './table/table_detail/table_detail.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [BodyComponent, HeaderComponent, ContentComponent, FooterComponent, IconBarComponent, ScreenSmallDirective, ScreenLargeDirective, MenuComponent, MenuItemComponent, SearchComponent, TableComponent, TableElemComponent, TableDetailComponent, SnackBarComponent
  ],
  exports: [BodyComponent, ScreenLargeDirective, ScreenSmallDirective, SearchComponent, TableComponent, TableElemComponent, TableDetailComponent, SnackBarComponent],
  providers: [LayoutConfigService, ScreenService, MenuService, HeaderService, SnackService]
})
export class LayoutModule { }
