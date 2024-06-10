import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRashtComponent } from './template-rasht.component';

describe('TemplateQarchakComponent', () => {
  let component: TemplateRashtComponent;
  let fixture: ComponentFixture<TemplateRashtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRashtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateRashtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
