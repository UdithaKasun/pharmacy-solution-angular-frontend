import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-manufacturer-add',
  templateUrl: './pharm-manufacturer-add.component.html',
  styleUrls: ['./pharm-manufacturer-add.component.css']
})
export class PharmManufacturerAddComponent implements OnInit {
  ManufacturerAddForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.ManufacturerAddForm = new FormGroup({
      manufacturer_name: new FormControl('', Validators.required),
      manufacturer_address: new FormControl('', Validators.required),
      manufacturer_contact: new FormControl('', Validators.required),
      manufacturer_email: new FormControl('', Validators.required)
    });
    this.submitted = false;
  }

  onSubmit() {

  }
  addNewEmployeeAddress() {
    this.ManufacturerAddForm.reset();
    this.submitted = false;
  }

}
