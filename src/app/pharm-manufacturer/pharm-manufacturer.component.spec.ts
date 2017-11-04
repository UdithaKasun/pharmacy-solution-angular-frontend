import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmManufacturerComponent } from './pharm-manufacturer.component';

describe('PharmManufacturerComponent', () => {
  let component: PharmManufacturerComponent;
  let fixture: ComponentFixture<PharmManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
