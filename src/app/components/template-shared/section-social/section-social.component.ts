import { Component, Input } from '@angular/core';
import { ResumeSocial } from '../../../shared/models/resume.model';

@Component({
  selector: 'section-social',
  standalone: true,
  imports: [],
  templateUrl: './section-social.component.html',
  styleUrl: './section-social.component.scss',
})
export class SectionSocialComponent {
  @Input() data?: ResumeSocial;
}
