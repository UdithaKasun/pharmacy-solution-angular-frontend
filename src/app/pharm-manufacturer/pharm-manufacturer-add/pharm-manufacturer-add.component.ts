import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Manufacturer} from '../../shared/models/manufacturer';
import {ManufacturerService} from '../../shared/services/manufacturer.service';

@Component({
  selector: 'app-pharm-manufacturer-add',
  templateUrl: './pharm-manufacturer-add.component.html',
  styleUrls: ['./pharm-manufacturer-add.component.css']
})
export class PharmManufacturerAddComponent implements OnInit {
  ManufacturerAddForm: FormGroup;
  submitted: boolean;

  constructor(private manufacturerService: ManufacturerService) {

  }

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

  resetCustomerForm(): void {
    this.ManufacturerAddForm.reset();
    this.submitted = false;
  }


  addNewManufacturer(): void {

        var manufacturer = new Manufacturer();
        manufacturer.manufacturer_name = this.ManufacturerAddForm.get('manufacturer_name').value;
        manufacturer.manufacturer_address = this.ManufacturerAddForm.get('manufacturer_address').value;
        manufacturer.manufacturer_contact = this.ManufacturerAddForm.get('manufacturer_contact').value;
        manufacturer.manufacturer_email = this.ManufacturerAddForm.get('manufacturer_email').value;

        console.log('adding Manufacturer : ', manufacturer);
        this.manufacturerService.addManufacturer(manufacturer)
          .subscribe(data => {
            console.log(data);
            alert("Manufacturer Added Successfully...");
            this.resetCustomerForm();
          });
      }

  addNewEmployeeAddress() {
    this.ManufacturerAddForm.reset();
    this.submitted = false;
  }

}
