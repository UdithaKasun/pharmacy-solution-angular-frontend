import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmDrugRequestAddComponent } from './pharm-drug-request-add.component';

describe('PharmDrugRequestAddComponent', () => {
  let component: PharmDrugRequestAddComponent;
  let fixture: ComponentFixture<PharmDrugRequestAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmDrugRequestAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmDrugRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
