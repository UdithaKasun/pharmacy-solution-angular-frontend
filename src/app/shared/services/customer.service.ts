import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import {Customer} from '../models/customer';
@Injectable()
export class CustomerService {

  constructor(private apiService: ApiService) { }

  // Load Customers
  loadCustomers(): Observable<any> {
    return this.apiService.get('/customer')
    .map(data => {
      return data;
    });
  }

  // Add Customer
  addCustomer(customer: Customer): Observable<any> {
    return this.apiService.post('/customer', { customer : customer })
      .map(data => {
        return data;
      });
  }

  // Update Customer
  updateCustomer(customer: Customer): Observable<any> {
    return this.apiService.put('/customer/' + customer.customer_id , { customer : customer })
      .map(data => {
        return data;
      });
  }

  // Delete Customer
  deleteCustomer(customer: Customer): Observable<any> {
    return this.apiService.delete('/customer/' + customer.customer_id)
      .map(data => {
        return data;
      });
  }
}
