import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-customer-update',
  templateUrl: './pharm-customer-update.component.html',
  styleUrls: ['./pharm-customer-update.component.css']
})
export class PharmCustomerUpdateComponent implements OnInit {

  customerUpdateForm: FormGroup;
  submitted: boolean;
  updateModalDisplay: boolean;

  ngOnInit(): void {
    this.customerUpdateForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      customer_age: new FormControl('', Validators.required),
      customer_contact: new FormControl('', Validators.required),
      customer_address: new FormControl('', Validators.required),
      customer_nic: new FormControl('', Validators.required),
      customer_email: new FormControl('', Validators.required)
    });
    this.submitted = false;
    this.updateModalDisplay = false;
  }

  onSubmit() {

  }

  displayUpdateModal(): void{
    this.customerUpdateForm.reset();
    this.updateModalDisplay = true;
  }

  cancelCustomerUpdate(): void{
    this.customerUpdateForm.reset();
    this.updateModalDisplay = false;
  }

  updateCustomer(): void {
    this.updateModalDisplay = false;
  }
}
