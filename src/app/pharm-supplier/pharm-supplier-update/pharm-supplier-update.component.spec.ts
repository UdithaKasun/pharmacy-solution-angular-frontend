import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmSupplierUpdateComponent } from './pharm-supplier-update.component';

describe('PharmSupplierUpdateComponent', () => {
  let component: PharmSupplierUpdateComponent;
  let fixture: ComponentFixture<PharmSupplierUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmSupplierUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmSupplierUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
