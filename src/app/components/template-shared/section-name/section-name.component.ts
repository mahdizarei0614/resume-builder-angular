import { Component, Input } from '@angular/core';
import { CapitalizeFirstLettersPipe } from '../../../shared/pipes/capitalize-first-letters.pipe';

@Component({
  selector: 'section-name',
  standalone: true,
  imports: [CapitalizeFirstLettersPipe],
  templateUrl: './section-name.component.html',
  styleUrl: './section-name.component.scss',
})
export class SectionNameComponent {
  @Input() data?: string;
}
