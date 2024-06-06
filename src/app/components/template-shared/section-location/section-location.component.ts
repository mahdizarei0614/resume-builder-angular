import { Component, Input } from '@angular/core';
import { ResumeLocation } from '../../../shared/models/resume.model';
import { CapitalizeFirstLettersPipe } from '../../../shared/pipes/capitalize-first-letters.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'section-location',
  standalone: true,
  imports: [CapitalizeFirstLettersPipe, NgOptimizedImage],
  templateUrl: './section-location.component.html',
  styleUrl: './section-location.component.scss',
})
export class SectionLocationComponent {
  @Input() data?: ResumeLocation;
}
