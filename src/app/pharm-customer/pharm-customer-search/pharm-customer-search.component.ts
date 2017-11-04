import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pharm-customer-search',
  templateUrl: './pharm-customer-search.component.html',
  styleUrls: ['./pharm-customer-search.component.css']
})
export class PharmCustomerSearchComponent implements OnInit {

  customerList: any[];
  customerSearchForm;
  constructor(private customerService: CustomerService) {

  }

  loadCustomers() {
    this.customerService.loadCustomers()
      .subscribe(data => {
        this.customerList = data.customers;
        console.log('Customer List : ', this.customerList);
      });

  }

  onSearch() {
    var searchKeyword = this.customerSearchForm.get('search_customer_name').value.toLowerCase();
    console.log(searchKeyword);
    this.customerService.loadCustomers()
      .subscribe(data => {
        this.customerList = data.customers.filter(item => {
          if (item.customer_name !== undefined && item.customer_name.toLowerCase().includes(searchKeyword)) {
            return true;
          }else {
            return false;
          }

        });
        console.log(this.customerList);
      });
  }

  clearSearch(): void{
    this.customerSearchForm.reset();
    this.loadCustomers();
  }


  ngOnInit() {
    this.customerSearchForm = new FormGroup({
      search_customer_name: new FormControl('', Validators.required)
    });

    this.loadCustomers();
  }

}
