import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmSupplierComponent } from './pharm-supplier.component';

describe('PharmSupplierComponent', () => {
  let component: PharmSupplierComponent;
  let fixture: ComponentFixture<PharmSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
