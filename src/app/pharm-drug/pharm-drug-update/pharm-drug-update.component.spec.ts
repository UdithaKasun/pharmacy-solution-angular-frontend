import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmDrugUpdateComponent } from './pharm-drug-update.component';

describe('PharmDrugUpdateComponent', () => {
  let component: PharmDrugUpdateComponent;
  let fixture: ComponentFixture<PharmDrugUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmDrugUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmDrugUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
