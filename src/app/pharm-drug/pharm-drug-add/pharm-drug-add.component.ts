import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DrugService } from '../../shared/services/drug.service';
import { Drug } from '../../shared/models/drug';

@Component({
  selector: 'app-pharm-drug-add',
  templateUrl: './pharm-drug-add.component.html',
  styleUrls: ['./pharm-drug-add.component.css']
})
export class PharmDrugAddComponent implements OnInit {
  
    drugAddForm: FormGroup;
    submitted: boolean;
    drugCategories : any[];
    drugType = "Tablet";
    drugCategory = "";

    constructor(private drugService : DrugService){
      
    }


    loadDrugCategories(){
      this.drugService.loadDrugCategories()
      .subscribe(data => {
        this.drugCategories = data.drugcategories;
      })
      
    }

    saveDrug(){
      var drug = new Drug();
      drug.drug_name = this.drugAddForm.get('drugName').value;
      drug.drug_price = this.drugAddForm.get('drugPrice').value;
      drug.drug_current_quantity = this.drugAddForm.get('drugInitialQuantity').value;
      drug.drug_status_reorder = this.drugAddForm.get('drugReorderQuantity').value;
      drug.drug_remarks = "";
      drug.drug_create_user = "USER_001";
      drug.drug_active = true;
      drug.drug_unit = this.drugAddForm.get('drugType').value;
      drug.drug_category_id = this.drugAddForm.get('drugCategory').value;
      console.log(drug);
      this.drugService.saveDrug(drug)
      .subscribe(data => {
        console.log(data);
      })
      
    }


    ngOnInit(): void {
      this.drugAddForm = new FormGroup({
        drugName: new FormControl('', Validators.required),
        drugPrice: new FormControl('',[Validators.required,Validators.pattern('[0-9]+.[0-9][0-9]')]),
        drugInitialQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
        drugReorderQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
        drugCategory: new FormControl('', Validators.required), 
        drugType: new FormControl('', Validators.required),  
      });
      this.submitted = false;
      this.loadDrugCategories();
    }
  
  
    onSubmit() {
      this.saveDrug();
    }
    addNewEmployeeAddress() {
      this.drugAddForm.reset();
      this.submitted = false;
    }

}
