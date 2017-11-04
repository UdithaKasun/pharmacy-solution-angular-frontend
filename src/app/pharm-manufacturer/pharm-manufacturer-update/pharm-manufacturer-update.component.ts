import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Manufacturer} from '../../shared/models/manufacturer';
import {Observable} from 'rxjs/Observable';
import {ManufacturerService} from '../../shared/services/manufacturer.service';

@Component({
  selector: 'app-pharm-manufacturer-update',
  templateUrl: './pharm-manufacturer-update.component.html',
  styleUrls: ['./pharm-manufacturer-update.component.css']
})
export class PharmManufacturerUpdateComponent implements OnInit {

  ManufacturerUpdateForm: FormGroup;
  selectedManufacturer;
  submitted: boolean;
  updateModalDisplay: boolean;
  deleteModalDisplay: boolean;
  manufacturerList: any[];
  updateManufacturerForm: any;
  deleteManufacturerForm: any;
  manufacturerSearchForm: FormGroup;

  constructor(private manufacturerService: ManufacturerService) {

  }


  loadManufacturers() {
    this.manufacturerService.loadManufacturers()
      .subscribe(data => {
        this.manufacturerList = data.manufacturers;
        console.log('Manufacturers List : ', this.manufacturerList);
      });

  }

  ngOnInit(): void {
    this.ManufacturerUpdateForm = new FormGroup({
      manufacturer_name: new FormControl('', Validators.required),
      manufacturer_address: new FormControl('', Validators.required),
      manufacturer_contact: new FormControl('', Validators.required),
      manufacturer_email: new FormControl('', Validators.required)
    });

    this.manufacturerSearchForm = new FormGroup({
      search_manufacturer_name: new FormControl('', Validators.required)
    });

    this.submitted = false;
    this.updateModalDisplay = false;
    this.deleteModalDisplay = false;
    this.loadManufacturers();
  }

  onSearch() {
    var searchKeyword = this.manufacturerSearchForm.get('search_manufacturer_name').value.toLowerCase();
    console.log(searchKeyword);
    this.manufacturerService.loadManufacturers()
      .subscribe(data => {
        this.manufacturerList = data.manufacturers.filter(item => {
          if (item.manufacturer_name !== undefined && item.manufacturer_name.toLowerCase().includes(searchKeyword)) {
            return true;
          }else {
            return false;
          }

        });
        console.log(this.manufacturerList);
      });
  }


  onSubmit() {

  }

  displayUpdateModal(manufacturerForm): void{
    this.updateManufacturerForm = manufacturerForm;
    this.selectedManufacturer = manufacturerForm;

    this.ManufacturerUpdateForm.get('manufacturer_name').setValue(manufacturerForm.manufacturer_name);
    this.ManufacturerUpdateForm.get('manufacturer_address').setValue(manufacturerForm.manufacturer_address);
    this.ManufacturerUpdateForm.get('manufacturer_contact').setValue(manufacturerForm.manufacturer_contact);
    this.ManufacturerUpdateForm.get('manufacturer_email').setValue(manufacturerForm.manufacturer_email);


    this.updateModalDisplay = true;
  }

  cancelManufacturerUpdate(): void {
    this.ManufacturerUpdateForm.reset();
    this.updateModalDisplay = false;
  }

  updateManufacturer(): void {

    this.selectedManufacturer.manufacturer_id = this.updateManufacturerForm.manufacturer_id;
    this.selectedManufacturer.manufacturer_name = this.ManufacturerUpdateForm.get('manufacturer_name').value;
    this.selectedManufacturer.manufacturer_address = this.ManufacturerUpdateForm.get('manufacturer_address').value;
    this.selectedManufacturer.manufacturer_contact = this.ManufacturerUpdateForm.get('manufacturer_contact').value;
    this.selectedManufacturer.manufacturer_email = this.ManufacturerUpdateForm.get('manufacturer_email').value;

    this.updateModalDisplay = false;

    console.log('updating Manufacturer : ', this.selectedManufacturer);
    this.manufacturerService.updateManufacturer(this.selectedManufacturer)
      .subscribe(data => {
        console.log(data);
        this.loadManufacturers();
        alert("Manufacturer Updated Successfully....");
      });

  }

  displayDeleteModal(manufacturerForm): void {
    this.deleteModalDisplay = true;
    this.deleteManufacturerForm = manufacturerForm;
  }

  deleteManufacturer(): void {
    this.deleteModalDisplay = false;

    this.manufacturerService.deleteManufacturer(this.deleteManufacturerForm)
      .subscribe(data => {
        console.log(data);
        this.loadManufacturers();
        alert("Manufacturer Deleted Successfully....");
      });

  }

  closeDeleteModal(): void {
    this.deleteModalDisplay = false;
  }

}
