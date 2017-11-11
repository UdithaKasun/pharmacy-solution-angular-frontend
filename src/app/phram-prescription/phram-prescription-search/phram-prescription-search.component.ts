import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrescriptionService } from '../../shared/services/prescription.service'

@Component({
  selector: 'app-phram-prescription-search',
  templateUrl: './phram-prescription-search.component.html',
  styleUrls: ['./phram-prescription-search.component.css']
})
export class PhramPrescriptionSearchComponent implements OnInit {

  prescriptionSearchForm;
  prescriptions: any[];
  viewModalDisplay: boolean;
  prescription_drugs: Array<items> = [];

  constructor(
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit() {
    this.prescriptionSearchForm = new FormGroup({
      search_patient_name: new FormControl('', Validators.required)
    });
    this.loadPrescriptions();
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

  //display view details model
  displayViewModal(prescription){
    this.viewModalDisplay = true;
    this.prescription_drugs = prescription.prescription_drugs
  }

  // close model
  closeviewModal(): void {
    this.viewModalDisplay = false;
  }

}

class items {
  prescription_item_drug_name: String;
  prescription_item_frequency: String;
  prescription_item_dosage: String;
  prescription_item_period: String;
  prescription_item_quantity: String;
}