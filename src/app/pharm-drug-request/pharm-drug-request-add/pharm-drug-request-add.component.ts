import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-drug-request-add',
  templateUrl: './pharm-drug-request-add.component.html',
  styleUrls: ['./pharm-drug-request-add.component.css']
})
export class PharmDrugRequestAddComponent implements OnInit {

  constructor() { }

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

}
