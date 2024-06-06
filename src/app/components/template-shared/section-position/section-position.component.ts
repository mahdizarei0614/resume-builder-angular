import { Component, Input } from '@angular/core';
import { ResumePosition } from '../../../shared/models/resume.model';
import { CapitalizeFirstLettersPipe } from '../../../shared/pipes/capitalize-first-letters.pipe';

@Component({
  selector: 'section-position',
  standalone: true,
  imports: [CapitalizeFirstLettersPipe],
  templateUrl: './section-position.component.html',
  styleUrl: './section-position.component.scss',
})
export class SectionPositionComponent {
  @Input() data?: ResumePosition;
}
