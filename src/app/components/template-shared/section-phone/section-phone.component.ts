import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'section-phone',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-phone.component.html',
  styleUrl: './section-phone.component.scss',
})
export class SectionPhoneComponent {
  @Input() data?: string;
}
