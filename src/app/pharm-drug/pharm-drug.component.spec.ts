import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmDrugComponent } from './pharm-drug.component';

describe('PharmDrugComponent', () => {
  let component: PharmDrugComponent;
  let fixture: ComponentFixture<PharmDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
