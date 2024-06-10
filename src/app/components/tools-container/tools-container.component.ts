import { Component, input, output, signal } from '@angular/core';
import { KeyValuePipe, NgIf } from '@angular/common';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { ResumePaperComponent } from '../resume-paper/resume-paper.component';
import { ResumeData, ResumeTemplate } from '../../shared/models/resume.model';
import { CapitalizeFirstLettersPipe } from '../../shared/pipes/capitalize-first-letters.pipe';

@Component({
  selector: 'tools-container',
  standalone: true,
  imports: [
    NgIf,
    ModalContainerComponent,
    ResumePaperComponent,
    KeyValuePipe,
    CapitalizeFirstLettersPipe,
  ],
  templateUrl: './tools-container.component.html',
  styleUrl: './tools-container.component.scss',
  host: {
    class: 'w-96 self-stretch rounded-2xl bg-slate-700',
  },
})
export class ToolsContainerComponent {
  themeModalOpened = signal(false);
  templateChanged = output<ResumeTemplate>();
  selectedTemplate = input<ResumeTemplate>();
  data = input<ResumeData | null>({
    name: 'mohammad mahdi zarei',
    position: {
      title: 'senior angular developer',
    },
    location: {
      country: 'United States',
      city: 'california',
    },
    phone: '+989123456789',
    email: 'mahdizarei0614@gmail.com',
  });

  openModal() {
    this.themeModalOpened.set(true);
  }

  closeModal() {
    this.themeModalOpened.set(false);
  }

  protected readonly ResumeTemplate = ResumeTemplate;
}
