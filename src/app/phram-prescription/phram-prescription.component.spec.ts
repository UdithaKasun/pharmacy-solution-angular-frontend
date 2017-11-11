import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramPrescriptionComponent } from './phram-prescription.component';

describe('PhramPrescriptionComponent', () => {
  let component: PhramPrescriptionComponent;
  let fixture: ComponentFixture<PhramPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhramPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhramPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
