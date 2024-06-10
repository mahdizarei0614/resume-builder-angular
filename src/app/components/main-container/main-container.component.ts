import { Component, OnInit, signal } from '@angular/core';
import { ResumePaperComponent } from '../resume-paper/resume-paper.component';
import { isBrowser } from '../../app.component';
import { ToolsContainerComponent } from '../tools-container/tools-container.component';
import theme from 'tailwindcss/defaultTheme';
import { ResumeTemplate } from '../../shared/models/resume.model';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [ResumePaperComponent, ToolsContainerComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
})
export class MainContainerComponent implements OnInit {
  template = signal<ResumeTemplate>(ResumeTemplate.Tehran);

  ngOnInit() {
    if (isBrowser()) {
      document.querySelector('.basic-info')?.addEventListener('click', () => {
        alert('clicked');
      });
    }
  }

  protected readonly theme = theme;
}
