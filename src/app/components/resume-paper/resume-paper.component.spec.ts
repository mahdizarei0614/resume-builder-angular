import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePaperComponent } from './resume-paper.component';

describe('ResumePaperComponent', () => {
  let component: ResumePaperComponent;
  let fixture: ComponentFixture<ResumePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
