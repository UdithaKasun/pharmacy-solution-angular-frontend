import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmCustomerComponent } from './pharm-customer.component';

describe('PharmCustomerComponent', () => {
  let component: PharmCustomerComponent;
  let fixture: ComponentFixture<PharmCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
