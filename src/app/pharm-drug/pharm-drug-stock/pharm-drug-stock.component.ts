import { Component, OnInit } from '@angular/core';
import { DrugService } from '../../shared/services/drug.service';

@Component({
  selector: 'app-pharm-drug-stock',
  templateUrl: './pharm-drug-stock.component.html',
  styleUrls: ['./pharm-drug-stock.component.css']
})
export class PharmDrugStockComponent implements OnInit {

  drugs = [];
  lowStockDrugs = false;
  constructor(private drugService : DrugService) { 
    this.drugService.getAllDrugs()
    .subscribe(data =>{
      this.drugs = data.drugs;
    })
  }

  toggleStatus(){
    if(this.lowStockDrugs){
      this.drugs = this.drugs.filter(item => {
        return item.drug_current_quantity <= item.drug_status_reorder;
      });
    }
    else{
      this.drugs = [];
      this.drugService.getAllDrugs()
      .subscribe(data =>{
        this.drugs = data.drugs;
      })
    }
    
  }

  ngOnInit() {
    
  }

}
