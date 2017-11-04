import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmDrugRequestComponent } from './pharm-drug-request.component';

describe('PharmDrugRequestComponent', () => {
  let component: PharmDrugRequestComponent;
  let fixture: ComponentFixture<PharmDrugRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmDrugRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmDrugRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
