import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPhoneComponent } from './section-phone.component';

describe('SectionPhoneComponent', () => {
  let component: SectionPhoneComponent;
  let fixture: ComponentFixture<SectionPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
