import { Component, input } from '@angular/core';
import { ResumeData, ResumeTemplate } from '../../shared/models/resume.model';
import { TemplateTehranComponent } from '../templates/template-tehran/template-tehran.component';
import { SectionNameComponent } from '../template-shared/section-name/section-name.component';
import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { SectionPositionComponent } from '../template-shared/section-position/section-position.component';
import { SectionEmailComponent } from '../template-shared/section-email/section-email.component';
import { SectionPhoneComponent } from '../template-shared/section-phone/section-phone.component';
import { SectionLocationComponent } from '../template-shared/section-location/section-location.component';
import { SectionSocialComponent } from '../template-shared/section-social/section-social.component';
import { TemplateKarajComponent } from '../templates/template-karaj/template-karaj.component';
import { TemplateRashtComponent } from '../templates/template-rasht/template-rasht.component';
import { TemplateShirazComponent } from '../templates/template-shiraz/template-shiraz.component';

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
    TemplateRashtComponent,
    TemplateShirazComponent,
    NgStyle,
    NgClass,
  ],
  templateUrl: './resume-paper.component.html',
  styleUrl: './resume-paper.component.scss',
  host: {
    class: 'grow',
  },
})
export class ResumePaperComponent {
  template = input(ResumeTemplate.Shiraz);
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
  protected readonly ResumeTemplate = ResumeTemplate;
}
