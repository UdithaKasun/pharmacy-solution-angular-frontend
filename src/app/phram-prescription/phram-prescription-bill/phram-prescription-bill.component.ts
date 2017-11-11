import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrescriptionService } from '../../shared/services/prescription.service'
import { Prescription } from '../../shared/models/prescription';
import { DrugService } from '../../shared/services/drug.service'

@Component({
  selector: 'app-phram-prescription-bill',
  templateUrl: './phram-prescription-bill.component.html',
  styleUrls: ['./phram-prescription-bill.component.css']
})
export class PhramPrescriptionBillComponent implements OnInit {

  prescriptionSearchForm;
  prescriptions: Array<Prescription>[];
  prescription_drugs: Array<items> = [];
  drugs: any[];
  viewModalDisplay:boolean;
  selectedName: string;
  selectedPrescription : string;
  selectedAge: string;
  selectedGender: string;
  total: number = 1500;
  medicine: number = 0;

  constructor(
    private prescriptionService: PrescriptionService,
    private drugService: DrugService,
    
  ) { }

  ngOnInit() {
    this.prescriptionSearchForm = new FormGroup({
      search_patient_name: new FormControl('', Validators.required)
    });
    this.loadPrescriptions();
    this.loadDrugs();
  }

  //load all prescriptions
  loadPrescriptions() {
    this.prescriptionService.loadPrescriptions()
      .subscribe(data => {
        this.prescriptions = data.prescriptions;
      });

  }

  // filter by search keyword
  onSearch() {
    var searchKeyword = this.prescriptionSearchForm.get('search_patient_name').value.toLowerCase();
    this.prescriptionService.loadPrescriptions()
      .subscribe(data => {
        this.prescriptions = data.prescriptions.filter(item => {
          if (item.prescription_patient_name !== undefined && item.prescription_patient_name.toLowerCase().includes(searchKeyword)) {
            return true;
          }else {
            return false;
          }

        });
      });
  }

  //clear search keyword
  clearSearch(): void{
    this.prescriptionSearchForm.reset();
    this.loadPrescriptions();
  }

  loadDrugs() {
    this.drugService.getAllDrugs()
      .subscribe(data => {
        this.drugs = data.drugs;
      })

  }

  //display view details model
  displayViewModal(prescription){
    this.viewModalDisplay = true;
    this.selectedPrescription = prescription.prescription_id;
    this.selectedName = prescription.prescription_patient_name;
    this.selectedAge = prescription.prescription_patient_age;
    this.selectedGender = prescription.prescription_patient_gender;

    prescription.prescription_drugs.forEach(element => {
      var item = new items();
      var price;
      item.prescription_item_drug_name = element.prescription_item_drug_name;
      item.prescription_item_quantity = element.prescription_item_quantity;

      this.drugs.forEach(element => {
        if(element.drug_name == item.prescription_item_drug_name){
          price = element.drug_price;
        }
      });
      item.prescription_one_item_price = price;
      item.prescription_item_price = (element.prescription_item_quantity * price).toString();

      this.medicine = this.medicine + +item.prescription_item_price;
      this.prescription_drugs.push(item);
    });
    this.total = this.total + this.medicine;
  }

  // close model
  closeviewModal(): void {
    this.viewModalDisplay = false;
    this.prescription_drugs = [];
    this.total = 1500;
    this.medicine = 0;
  }

}


class items {
  prescription_item_drug_name: String;
  prescription_item_quantity: String;
  prescription_item_price: String;
  prescription_one_item_price: String;
}