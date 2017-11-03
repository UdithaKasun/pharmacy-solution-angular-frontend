import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { DrugCategory } from '../models/drugcategories';
import { Drug } from '../models/drug';
@Injectable()
export class DrugService {

  constructor(private apiService : ApiService) { }

  //Load Drug Categories
  loadDrugCategories() : Observable<any> {
    return this.apiService.get('/drugs/categories/all')
    .map(data => {
      return data;
    });
  }

  saveDrug(drug : Drug) : Observable<any> {
    return this.apiService.post('/drugs', { drug : drug })
    .map(data => {
      return data;
    });
  }
}
