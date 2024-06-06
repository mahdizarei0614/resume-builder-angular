import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateKarajComponent } from './template-karaj.component';

describe('TemplateKarajComponent', () => {
  let component: TemplateKarajComponent;
  let fixture: ComponentFixture<TemplateKarajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateKarajComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateKarajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
