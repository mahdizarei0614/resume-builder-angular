import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTehranComponent } from './template-tehran.component';

describe('TemplateTehranComponent', () => {
  let component: TemplateTehranComponent;
  let fixture: ComponentFixture<TemplateTehranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTehranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTehranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
