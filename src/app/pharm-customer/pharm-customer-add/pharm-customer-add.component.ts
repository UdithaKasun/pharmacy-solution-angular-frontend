import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-customer-add',
  templateUrl: './pharm-customer-add.component.html',
  styleUrls: ['./pharm-customer-add.component.css']
})
export class PharmCustomerAddComponent implements OnInit {
  customerAddForm: FormGroup;
  submitted: boolean;

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
  addNewCustomerAddress() {
    this.customerAddForm.reset();
    this.submitted = false;
  }

}
