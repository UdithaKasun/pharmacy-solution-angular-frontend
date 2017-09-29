import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-pharm-drug-update',
  templateUrl: './pharm-drug-update.component.html',
  styleUrls: ['./pharm-drug-update.component.css']
})
export class PharmDrugUpdateComponent {

  employeeAddressForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    address: new FormGroup({
      postalCode: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  });
  submitted = false;
  onSubmit() {

  }
  addNewEmployeeAddress() {
    this.employeeAddressForm.reset();
    this.submitted = false;
  }
}
