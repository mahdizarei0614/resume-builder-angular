import { Component, OnInit } from '@angular/core';
import { ResumePaperComponent } from '../resume-paper/resume-paper.component';
import { isBrowser } from '../../app.component';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [ResumePaperComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
})
export class MainContainerComponent implements OnInit {
  ngOnInit() {
    if (isBrowser()) {
      document.querySelector('.basic-info')?.addEventListener('click', () => {
        alert('clicked');
      });
    }
  }
}
