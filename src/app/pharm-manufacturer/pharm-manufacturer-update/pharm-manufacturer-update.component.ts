import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-manufacturer-update',
  templateUrl: './pharm-manufacturer-update.component.html',
  styleUrls: ['./pharm-manufacturer-update.component.css']
})
export class PharmManufacturerUpdateComponent implements OnInit {

  ManufacturerUpdateForm: FormGroup;
  submitted: boolean;
  updateModalDisplay: boolean;

  ngOnInit(): void {
    this.ManufacturerUpdateForm = new FormGroup({
      manufacturer_name: new FormControl('', Validators.required),
      manufacturer_address: new FormControl('', Validators.required),
      manufacturer_contact: new FormControl('', Validators.required),
      manufacturer_email: new FormControl('', Validators.required)
    });
    this.submitted = false;
    this.updateModalDisplay = false;
  }

  onSubmit() {

  }
  displayUpdateModal(): void{
    this.updateModalDisplay = true;
  }
}
