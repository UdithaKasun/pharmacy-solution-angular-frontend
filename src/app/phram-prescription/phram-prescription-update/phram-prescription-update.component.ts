import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrescriptionService } from '../../shared/services/prescription.service'
import { DrugService } from '../../shared/services/drug.service'

@Component({
  selector: 'app-phram-prescription-update',
  templateUrl: './phram-prescription-update.component.html',
  styleUrls: ['./phram-prescription-update.component.css']
})
export class PhramPrescriptionUpdateComponent implements OnInit {

  prescriptionSearchForm;
  drugUpdateForm;
  prescriptions: any[];
  updateModalDisplay: boolean;
  deleteModalDisplay: boolean;
  prescription_drugs: Array<items> = [];
  drugs: any[];
  index: number;
  selectedPrescription;
  selectedName: String;
  selectedId: String

  constructor(
    private prescriptionService: PrescriptionService,
    private drugService: DrugService
  ) { }

  ngOnInit() {
    this.prescriptionSearchForm = new FormGroup({
      search_patient_name: new FormControl('', Validators.required)
    });
    this.drugUpdateForm = new FormGroup({
      drugName: new FormControl('', Validators.required),
      frequency: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      quantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
    });
    this.loadPrescriptions();
    this.loadDrugs();
  }

  // get all prescriptions
  loadPrescriptions() {
    this.prescriptionService.loadPrescriptions()
      .subscribe(data => {
        this.prescriptions = data.prescriptions;
      });

  }

  // filter by search key word
  onSearch() {
    var searchKeyword = this.prescriptionSearchForm.get('search_patient_name').value.toLowerCase();
    this.prescriptionService.loadPrescriptions()
      .subscribe(data => {
        this.prescriptions = data.prescriptions.filter(item => {
          if (item.prescription_patient_name !== undefined && item.prescription_patient_name.toLowerCase().includes(searchKeyword)) {
            return true;
          } else {
            return false;
          }

        });
      });
  }

  // crear search key word
  clearSearch(): void {
    this.prescriptionSearchForm.reset();
    this.loadPrescriptions();
  }

  // diaplay update model
  displayUpdateModal(prescription) {
    this.updateModalDisplay = true;
    this.selectedPrescription = prescription;
    this.prescription_drugs = null;
    this.prescription_drugs = prescription.prescription_drugs;
    this.selectedId = prescription.prescription_id;
    this.selectedName = prescription.prescription_patient_name;
  }

  //close update model
  closeUpdateModal() {
    this.updateModalDisplay = false;
    this.prescription_drugs = null;
    this.drugUpdateForm.reset();

  }
  // diaplay delete model
  displayDeleteModal(prescription) {
    this.deleteModalDisplay = true;
    this.selectedPrescription = prescription;
    this.selectedId = prescription.prescription_id;
    this.selectedName = prescription.prescription_patient_name;
  }

  //close delete model
  closeDeleteModal() {
    this.deleteModalDisplay = false;

  }

  //Add new drug to the table
  addDrug() {
    var item = new items;
    item.prescription_item_drug_name = this.drugUpdateForm.get('drugName').value;
    item.prescription_item_frequency = this.drugUpdateForm.get('frequency').value;
    item.prescription_item_dosage = this.drugUpdateForm.get('dosage').value;
    item.prescription_item_period = this.drugUpdateForm.get('period').value;

    this.prescription_drugs.push(item);
    this.drugUpdateForm.reset();
  }

  //Load selected durg details to edit
  loadDurgsToEdit(drug, drugIndex) {
    this.loadDrugs();
    this.index = drugIndex;
    this.drugUpdateForm.get('drugName').setValue(drug.prescription_item_drug_name);
    this.drugUpdateForm.get('frequency').setValue(drug.prescription_item_frequency);
    this.drugUpdateForm.get('dosage').setValue(drug.prescription_item_dosage);
    this.drugUpdateForm.get('period').setValue(drug.prescription_item_period);
    this.drugUpdateForm.get('quantity').setValue(drug.prescription_item_quantity);
  }

  // Delete durg in the table
  deleteDrug(index) {
    this.prescription_drugs.splice(index, 1);
  }

  // Load all drugs
  loadDrugs() {
    this.drugService.getAllDrugs()
      .subscribe(data => {
        this.drugs = data.drugs;
      })

  }

  // edit selected drug details
  editDrug() {
    this.prescription_drugs[this.index].prescription_item_drug_name = this.drugUpdateForm.get('drugName').value;
    this.prescription_drugs[this.index].prescription_item_frequency = this.drugUpdateForm.get('frequency').value;
    this.prescription_drugs[this.index].prescription_item_dosage = this.drugUpdateForm.get('dosage').value;
    this.prescription_drugs[this.index].prescription_item_period = this.drugUpdateForm.get('period').value;
    this.prescription_drugs[this.index].prescription_item_quantity = this.drugUpdateForm.get('quantity').value;

    this.drugUpdateForm.reset();
  }

  // upadate prescription
  updatePrescription() {
    this.selectedPrescription.prescription_drugs = this.prescription_drugs;
    this.updateModalDisplay = false;

    this.prescriptionService.updatePrescription(this.selectedPrescription)
      .subscribe(data => {
        this.loadPrescriptions();
        this.drugUpdateForm.reset();
        this.prescription_drugs = null;
        alert("Prescription Updated Successfully....");
      });
  }

  //delete prescription
  deletePrescription() {
    

    this.prescriptionService.deletePrescription(this.selectedPrescription)
      .subscribe((data) => {
        alert("Prescription Deleted Successfully....");
        this.updateModalDisplay = false;
        this.loadPrescriptions();
      }, (error) => {
        alert("Prescription Deleted Successfully....");
        this.updateModalDisplay = false;
        this.loadPrescriptions();
      })
  }
}

class items {
  prescription_item_drug_name: String;
  prescription_item_frequency: String;
  prescription_item_dosage: String;
  prescription_item_period: String;
  prescription_item_quantity: String;
}