import { Injectable } from '@angular/core';

export interface HeaderItem {
  name: string;
  description: string;
}

@Injectable()
export class HeaderService {
  items: Array<HeaderItem>;
}
