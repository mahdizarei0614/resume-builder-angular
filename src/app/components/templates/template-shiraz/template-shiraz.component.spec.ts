import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateShirazComponent } from './template-shiraz.component';

describe('TemplateShirazComponent', () => {
  let component: TemplateShirazComponent;
  let fixture: ComponentFixture<TemplateShirazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateShirazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateShirazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
