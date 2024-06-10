import { Component, input, output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'modal-container',
  standalone: true,
  imports: [],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: '8rem', width: '14rem' }),
        animate(
          '.3s ease-out',
          style({ opacity: 1, height: '32rem', width: '56rem' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '32rem', width: '56rem' }),
        animate(
          '.3s ease-in',
          style({ opacity: 0, height: '8rem', width: '14rem' })
        ),
      ]),
    ]),
    trigger('inOutOpacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ModalContainerComponent {
  opened = input(false);
  close = output();
}
