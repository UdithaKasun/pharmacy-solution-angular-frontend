import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Manufacturer } from '../models/manufacturer';
@Injectable()
export class ManufacturerService {

  constructor(private apiService: ApiService) { }

  // Load Manufacturers
  loadManufacturers(): Observable<any> {
    return this.apiService.get('/manufacturer')
    .map(data => {
      return data;
    });
  }

  // Add Manufacturer
  addManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.apiService.post('/manufacturer', { manufacturer : manufacturer })
      .map(data => {
        return data;
      });
  }

  // Update Manufacturer
  updateManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.apiService.put('/manufacturer/' + manufacturer.manufacturer_id , { manufacturer : manufacturer })
      .map(data => {
        return data;
      });
  }

  // Delete Customer
  deleteManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.apiService.delete('/manufacturer/' + manufacturer.manufacturer_id)
      .map(data => {
        return data;
      });
  }

}
