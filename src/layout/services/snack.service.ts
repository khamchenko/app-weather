import { Injectable } from '@angular/core';

export interface SnackItem {
  error: string;
  message: string;
  imageFile: string,
  alt: string,
  type: string
}


@Injectable()
export class SnackService {
  items: Array<SnackItem>;

  constructor() {
    this.items = [];
  }

  deleteItems() {
    if (this.items) {
      this.items.pop();
    }
  }

  addItem(item) {
    this.items.unshift(item);

    setTimeout(() => {
      this.deleteItems()
    }, 3000);
  }
}
