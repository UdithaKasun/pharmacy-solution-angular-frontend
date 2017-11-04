import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmSupplierAddComponent } from './pharm-supplier-add.component';

describe('PharmSupplierAddComponent', () => {
  let component: PharmSupplierAddComponent;
  let fixture: ComponentFixture<PharmSupplierAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmSupplierAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmSupplierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
