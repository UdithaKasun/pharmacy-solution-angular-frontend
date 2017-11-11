import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramPrescriptionUpdateComponent } from './phram-prescription-update.component';

describe('PhramPrescriptionUpdateComponent', () => {
  let component: PhramPrescriptionUpdateComponent;
  let fixture: ComponentFixture<PhramPrescriptionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhramPrescriptionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhramPrescriptionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
