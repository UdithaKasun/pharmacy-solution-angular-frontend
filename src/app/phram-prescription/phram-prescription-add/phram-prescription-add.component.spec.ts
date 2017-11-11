import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramPrescriptionAddComponent } from './phram-prescription-add.component';

describe('PhramPrescriptionAddComponent', () => {
  let component: PhramPrescriptionAddComponent;
  let fixture: ComponentFixture<PhramPrescriptionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhramPrescriptionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhramPrescriptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
