import { Component, Input } from '@angular/core';
import { CapitalizeFirstLettersPipe } from '../../../shared/pipes/capitalize-first-letters.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'section-email',
  standalone: true,
  imports: [CapitalizeFirstLettersPipe, NgOptimizedImage],
  templateUrl: './section-email.component.html',
  styleUrl: './section-email.component.scss',
})
export class SectionEmailComponent {
  @Input() data?: string;
}
