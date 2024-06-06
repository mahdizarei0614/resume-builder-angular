import { Component, Input } from '@angular/core';
import { ResumeData, ResumeTemplate } from '../../shared/models/resume.model';
import { TemplateTehranComponent } from '../templates/template-tehran/template-tehran.component';
import { SectionNameComponent } from '../template-shared/section-name/section-name.component';
import { NgTemplateOutlet } from '@angular/common';
import { SectionPositionComponent } from '../template-shared/section-position/section-position.component';
import { SectionEmailComponent } from '../template-shared/section-email/section-email.component';
import { SectionPhoneComponent } from '../template-shared/section-phone/section-phone.component';
import { SectionLocationComponent } from '../template-shared/section-location/section-location.component';
import { SectionSocialComponent } from '../template-shared/section-social/section-social.component';
import { TemplateKarajComponent } from '../templates/template-karaj/template-karaj.component';

@Component({
  selector: 'resume-paper',
  standalone: true,
  imports: [
    TemplateTehranComponent,
    SectionNameComponent,
    NgTemplateOutlet,
    SectionPositionComponent,
    SectionEmailComponent,
    SectionPhoneComponent,
    SectionLocationComponent,
    SectionSocialComponent,
    TemplateKarajComponent,
  ],
  templateUrl: './resume-paper.component.html',
  styleUrl: './resume-paper.component.scss',
})
export class ResumePaperComponent {
  @Input() template: ResumeTemplate = ResumeTemplate.Tehran;
  @Input() data?: ResumeData = {
    name: 'mahdi zarei',
    position: {
      title: 'senior angular developer',
    },
    location: {
      country: 'United States',
      city: 'alabama',
    },
    phone: '+989123456789',
    email: 'mahdizarei0614@gmail.com',
  };
  protected readonly ResumeTemplate = ResumeTemplate;
}
