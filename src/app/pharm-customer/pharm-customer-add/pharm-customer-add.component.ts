import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CustomerService} from '../../shared/services/customer.service';
import {Customer} from '../../shared/models/customer';

@Component({
  selector: 'app-pharm-customer-add',
  templateUrl: './pharm-customer-add.component.html',
  styleUrls: ['./pharm-customer-add.component.css']
})
export class PharmCustomerAddComponent implements OnInit {
  customerAddForm: FormGroup;
  submitted: boolean;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerAddForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      customer_age: new FormControl('', Validators.required),
      customer_contact: new FormControl('', Validators.required),
      customer_address: new FormControl('', Validators.required),
      customer_nic: new FormControl('', Validators.required),
      customer_email: new FormControl('', Validators.required)
    });
    this.submitted = false;
  }


  onSubmit() {
  }


  resetCustomerForm(): void {
    this.customerAddForm.reset();
    this.submitted = false;
  }

  addNewCustomer(): void {

    var customer = new Customer();
    customer.customer_name = this.customerAddForm.get('customer_name').value;
    customer.customer_address = this.customerAddForm.get('customer_address').value;
    customer.customer_age = this.customerAddForm.get('customer_age').value;
    customer.customer_contact = this.customerAddForm.get('customer_contact').value;
    customer.customer_email = this.customerAddForm.get('customer_email').value;
    customer.customer_nic = this.customerAddForm.get('customer_nic').value;
    customer.customer_order_history = [];

    console.log('adding Customer : ', customer);
    this.customerService.addCustomer(customer)
      .subscribe(data => {
        console.log(data);
        alert("Customer Added Successfully....");
        this.resetCustomerForm();
      });
  }


}
