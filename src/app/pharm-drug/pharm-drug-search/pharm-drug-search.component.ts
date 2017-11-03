import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DrugService } from '../../shared/services/drug.service';

@Component({
  selector: 'app-pharm-drug-search',
  templateUrl: './pharm-drug-search.component.html',
  styleUrls: ['./pharm-drug-search.component.css']
})
export class PharmDrugSearchComponent implements OnInit {

  drugSearchForm: FormGroup;
  drugs = [];
  constructor(private drugService : DrugService) { }

  ngOnInit() {
    this.drugSearchForm = new FormGroup({
      drugName: new FormControl('', Validators.required) 
    });
  }

  onSubmit(){
    var searchKeyword = this.drugSearchForm.get('drugName').value;
    console.log(searchKeyword);
    this.drugService.getAllDrugs()
    .subscribe(data =>{
      this.drugs = data.drugs.filter(item => {
        if(item.drug_name != undefined && item.drug_name.includes(searchKeyword)){
          return true;
        }
        else{
          return false;
        }
        
      });
      console.log(this.drugs);
    })
  }


}
