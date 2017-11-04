import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmManufacturerSearchComponent } from './pharm-manufacturer-search.component';

describe('PharmManufacturerSearchComponent', () => {
  let component: PharmManufacturerSearchComponent;
  let fixture: ComponentFixture<PharmManufacturerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmManufacturerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmManufacturerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
