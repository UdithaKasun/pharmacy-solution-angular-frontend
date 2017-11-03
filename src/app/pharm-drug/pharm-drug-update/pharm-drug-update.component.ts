import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DrugService } from '../../shared/services/drug.service';
import { Drug } from '../../shared/models/drug';

@Component({
  selector: 'app-pharm-drug-update',
  templateUrl: './pharm-drug-update.component.html',
  styleUrls: ['./pharm-drug-update.component.css']
})
export class PharmDrugUpdateComponent implements OnInit {

  drugAddForm: FormGroup;
  drugUpdateForm: FormGroup;
  drugs = [];
  selectedDrug;
  showUpdate = false;
  constructor(private drugService : DrugService) { }

  ngOnInit() {
    this.drugUpdateForm = new FormGroup({
      drugName: new FormControl('', Validators.required) 
    });

    this.drugAddForm = new FormGroup({
      drugName: new FormControl('', Validators.required),
      drugPrice: new FormControl('',[Validators.required,Validators.pattern('[0-9]+.[0-9][0-9]')]),
      drugInitialQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      drugReorderQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])
    });
  }

  onSubmit(){
    var searchKeyword = this.drugUpdateForm.get('drugName').value;
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

  viewUpdate(drug){
    this.showUpdate = true;
    console.log(drug);
    this.selectedDrug = drug;
    this.drugAddForm.get('drugName').setValue(drug.drug_name);
    this.drugAddForm.get('drugPrice').setValue(drug.drug_price);
    this.drugAddForm.get('drugInitialQuantity').setValue(drug.drug_current_quantity);
    this.drugAddForm.get('drugReorderQuantity').setValue(drug.drug_status_reorder);

  }

  updateDrug(){
    this.selectedDrug.drug_name = this.drugAddForm.get('drugName').value;
    this.selectedDrug.drug_price = this.drugAddForm.get('drugPrice').value;
    this.selectedDrug.drug_current_quantity = this.drugAddForm.get('drugInitialQuantity').value;
    this.selectedDrug.drug_status_reorder = this.drugAddForm.get('drugReorderQuantity').value;

    this.drugService.updateDrug(this.selectedDrug)
    .subscribe(data => {
      console.log(data);
      this.showUpdate = false;
      alert("Drug Updated Successfully....")
    })
  }

  deleteDrug(drug){
    if (confirm("Do you really want to delete the drug ?") == true) {
      this.drugService.deleteDrug(drug)
      .subscribe(data => {
        console.log(data);
        alert("Drug Deleted Successfully....")
        this.drugs = [];
      })
  } else {
     
  }
    
  }
}
