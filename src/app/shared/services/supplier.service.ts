import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SupplierService {

  constructor(private apiService : ApiService) { }

  saveSupplier(supplier : Object) : Observable<any> {
    return this.apiService.post('/supplier', { supplier : supplier })
    .map(data => {
      return data;
    });
  };

  loadSuppliers() : Observable<any> {
    return this.apiService.get('/supplier')
    .map(data => {
      return data;
    });
  }
}
