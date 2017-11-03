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

  //Save Drug to Database
  saveDrug(drug : Drug) : Observable<any> {
    return this.apiService.post('/drugs', { drug : drug })
    .map(data => {
      return data;
    });
  }

  //Get Drugs by mathcing search keyword
  getAllDrugs() : Observable<any>{
    return this.apiService.get('/drugs')
    .map(data => {
      return data;
    });
  }
  
  updateDrug(drug : Drug) : Observable<any> {
    return this.apiService.put('/drugs/' + drug.drug_srno, { drug : drug })
    .map(data => {
      return data;
    });
  }

  deleteDrug(drug : Drug) : Observable<any> {
    return this.apiService.delete('/drugs/' + drug.drug_srno)
    .map(data => {
      return data;
    });
  }
}
