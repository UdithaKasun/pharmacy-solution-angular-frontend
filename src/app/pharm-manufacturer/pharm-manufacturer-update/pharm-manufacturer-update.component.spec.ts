import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmManufacturerUpdateComponent } from './pharm-manufacturer-update.component';

describe('PharmManufacturerUpdateComponent', () => {
  let component: PharmManufacturerUpdateComponent;
  let fixture: ComponentFixture<PharmManufacturerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmManufacturerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmManufacturerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
