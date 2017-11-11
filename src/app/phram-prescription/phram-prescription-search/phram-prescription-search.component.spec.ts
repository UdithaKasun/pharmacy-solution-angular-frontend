import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramPrescriptionSearchComponent } from './phram-prescription-search.component';

describe('PhramPrescriptionSearchComponent', () => {
  let component: PhramPrescriptionSearchComponent;
  let fixture: ComponentFixture<PhramPrescriptionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhramPrescriptionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhramPrescriptionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
