import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from '../../shared/services/manufacturer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pharm-manufacturer-search',
  templateUrl: './pharm-manufacturer-search.component.html',
  styleUrls: ['./pharm-manufacturer-search.component.css']
})
export class PharmManufacturerSearchComponent implements OnInit {

  manufacturerList: any[];
  manufacturerSearchForm;
  constructor(private manufacturerService: ManufacturerService) {

      }


      loadManufacturers() {
        this.manufacturerService.loadManufacturers()
          .subscribe(data => {
            this.manufacturerList = data.manufacturers;
            console.log('Manufacturers List : ', this.manufacturerList);
          });

      }

  ngOnInit() {
    this.manufacturerSearchForm = new FormGroup({
      search_manufacturer_name: new FormControl('', Validators.required)
    });

    this.loadManufacturers();
  }

  clearSearch(): void{
    this.manufacturerSearchForm.reset();
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

}
