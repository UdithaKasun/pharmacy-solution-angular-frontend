import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmDrugRequestUpdateComponent } from './pharm-drug-request-update.component';

describe('PharmDrugRequestUpdateComponent', () => {
  let component: PharmDrugRequestUpdateComponent;
  let fixture: ComponentFixture<PharmDrugRequestUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmDrugRequestUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmDrugRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
