import { trigger, transition, style, animate } from '@angular/animations';

export const visibility = trigger('visibility',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(800, style({ opacity: 1 }))
    ])
  ]);

  export const add_item = trigger('visibility',
    [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ])
    ]);
