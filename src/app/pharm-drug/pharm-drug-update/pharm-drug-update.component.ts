import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-pharm-drug-update',
  templateUrl: './pharm-drug-update.component.html',
  styleUrls: ['./pharm-drug-update.component.css']
})
export class PharmDrugUpdateComponent implements OnInit {

  drugAddForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.drugAddForm = new FormGroup({
      drugName: new FormControl('', Validators.required),
      drugPrice: new FormControl('',[Validators.required,Validators.pattern('[0-9]+.[0-9][0-9]')]),
      drugInitialQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      drugReorderQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])  
    });
    this.submitted = false;
  }


  onSubmit() {

  }
  addNewEmployeeAddress() {
    this.drugAddForm.reset();
    this.submitted = false;
  }
}
