import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramPrescriptionBillComponent } from './phram-prescription-bill.component';

describe('PhramPrescriptionBillComponent', () => {
  let component: PhramPrescriptionBillComponent;
  let fixture: ComponentFixture<PhramPrescriptionBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhramPrescriptionBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhramPrescriptionBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
