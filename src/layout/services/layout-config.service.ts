import { Injectable } from '@angular/core';

export interface Icons {
  imageFile: string;
  url: string;
  alt: string;
}

export interface LayoutConfigSettings{
  showUserControls?: boolean;
  socialIcons?: Array<Icons>;
}

@Injectable()
export class LayoutConfigService {
  showUserControls = true;
  socialIcons = new Array<Icons>();
  configure(settings: LayoutConfigSettings): void {
    Object.assign(this, settings);
  }
}
