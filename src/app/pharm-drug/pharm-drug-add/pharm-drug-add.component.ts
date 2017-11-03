import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DrugService } from '../../shared/services/drug.service';

@Component({
  selector: 'app-pharm-drug-add',
  templateUrl: './pharm-drug-add.component.html',
  styleUrls: ['./pharm-drug-add.component.css']
})
export class PharmDrugAddComponent implements OnInit {
  
    drugAddForm: FormGroup;
    submitted: boolean;
    drugCategories : any[];

    constructor(private drugService : DrugService){
      
    }


    loadDrugCategories(){
      this.drugService.loadDrugCategories()
      .subscribe(data => {
        this.drugCategories = data.drugcategories;
      })
      
    }


    ngOnInit(): void {
      this.drugAddForm = new FormGroup({
        drugName: new FormControl('', Validators.required),
        drugPrice: new FormControl('',[Validators.required,Validators.pattern('[0-9]+.[0-9][0-9]')]),
        drugInitialQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
        drugReorderQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])  
      });
      this.submitted = false;
      this.loadDrugCategories();
    }
  
  
    onSubmit() {
      
    }
    addNewEmployeeAddress() {
      this.drugAddForm.reset();
      this.submitted = false;
    }

}
