import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPositionComponent } from './section-position.component';

describe('SectionPositionComponent', () => {
  let component: SectionPositionComponent;
  let fixture: ComponentFixture<SectionPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
