import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Customer} from '../../shared/models/customer';
import {Observable} from 'rxjs/Observable';
import {CustomerService} from '../../shared/services/customer.service';

@ Component({
  selector: 'app-pharm-customer-update',
  templateUrl: './pharm-customer-update.component.html',
  styleUrls: ['./pharm-customer-update.component.css']
})
export class PharmCustomerUpdateComponent implements OnInit {

  customerUpdateForm: FormGroup;
  selectedCustomer;
  submitted: boolean;
  updateModalDisplay: boolean;
  deleteModalDisplay: boolean;
  customerList: any[];

  deleteCustomerForm: any;
  updateCustomerForm: any;
  customerSearchForm: FormGroup;

  constructor(private customerService: CustomerService) {

  }

  loadCustomers() {
    this.customerService.loadCustomers()
      .subscribe(data => {
        this.customerList = data.customers;
        console.log('Customer List : ', this.customerList);
      });

  }

  ngOnInit(): void {
    this.customerUpdateForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      customer_age: new FormControl('', Validators.required),
      customer_contact: new FormControl('', Validators.required),
      customer_address: new FormControl('', Validators.required),
      customer_nic: new FormControl('', Validators.required),
      customer_email: new FormControl('', Validators.required)
    });

    this.customerSearchForm = new FormGroup({
      search_customer_name: new FormControl('', Validators.required)
    });


    this.submitted = false;
    this.updateModalDisplay = false;
    this.deleteModalDisplay = false;
    this.loadCustomers();
  }



  clearSearch(): void{
    this.customerSearchForm.reset();
    this.loadCustomers();
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


  displayUpdateModal(customerForm): void{
    this.updateCustomerForm = customerForm;
    this.selectedCustomer = customerForm;

    this.customerUpdateForm.get('customer_name').setValue(customerForm.customer_name);
    this.customerUpdateForm.get('customer_nic').setValue(customerForm.customer_nic);
    this.customerUpdateForm.get('customer_age').setValue(customerForm.customer_age);
    this.customerUpdateForm.get('customer_email').setValue(customerForm.customer_email);
    this.customerUpdateForm.get('customer_address').setValue(customerForm.customer_address);
    this.customerUpdateForm.get('customer_contact').setValue(customerForm.customer_contact);

    this.updateModalDisplay = true;
  }

  cancelCustomerUpdate(): void {
    this.customerUpdateForm.reset();
    this.updateModalDisplay = false;
  }

  updateCustomer(): void {

    this.selectedCustomer.customer_id = this.updateCustomerForm.customer_id;
    this.selectedCustomer.customer_name = this.customerUpdateForm.get('customer_name').value;
    this.selectedCustomer.customer_address = this.customerUpdateForm.get('customer_address').value;
    this.selectedCustomer.customer_age = this.customerUpdateForm.get('customer_age').value;
    this.selectedCustomer.customer_contact = this.customerUpdateForm.get('customer_contact').value;
    this.selectedCustomer.customer_email = this.customerUpdateForm.get('customer_email').value;
    this.selectedCustomer.customer_nic = this.customerUpdateForm.get('customer_nic').value;
    this.selectedCustomer.customer_order_history = [];
    this.updateModalDisplay = false;

    console.log('updating Customer : ', this.selectedCustomer);
    this.customerService.updateCustomer(this.selectedCustomer)
      .subscribe(data => {
        console.log(data);
        this.loadCustomers();
        alert("Customer Updated Successfully....");
      });

  }

  displayDeleteModal(customerForm): void {
    this.deleteModalDisplay = true;
    this.deleteCustomerForm = customerForm;
  }

  deleteCustomer(): void {
    this.deleteModalDisplay = false;

    this.customerService.deleteCustomer(this.deleteCustomerForm)
      .subscribe(data => {
        console.log(data);
        this.loadCustomers();
        alert("Customer Deleted Successfully....");
      });

  }

  closeDeleteModal(): void {
    this.deleteModalDisplay = false;
  }
}
