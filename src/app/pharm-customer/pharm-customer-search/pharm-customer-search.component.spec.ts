import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmCustomerSearchComponent } from './pharm-customer-search.component';

describe('PharmCustomerSearchComponent', () => {
  let component: PharmCustomerSearchComponent;
  let fixture: ComponentFixture<PharmCustomerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmCustomerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmCustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
