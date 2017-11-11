import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../../shared/services/customer.service'
import { DrugService } from '../../shared/services/drug.service'
import { PrescriptionService } from '../../shared/services/prescription.service'
import { Prescription } from '../../shared/models/prescription'

@Component({
  selector: 'app-phram-prescription-add',
  templateUrl: './phram-prescription-add.component.html',
  styleUrls: ['./phram-prescription-add.component.css']
})
export class PhramPrescriptionAddComponent implements OnInit {

  prescriptionAddForm: FormGroup;
  submitted: boolean;
  patients: any[];
  drugs: any[];
  prescription_drugs: Array<items> = [];

  constructor(
    private customerService: CustomerService,
    private drugService: DrugService,
    private prescriptionService : PrescriptionService
  ) { }

  ngOnInit(): void {
    this.prescriptionAddForm = new FormGroup({
      patientName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      quantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      drugName: new FormControl('', Validators.required),
      frequency: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      remark: new FormControl(),
      
    });
    this.submitted = false;
    this.loadPatients();
    this.loadDrugs();
  }

  //save prescroption
  savePrescription() {
    var prescription = new Prescription();
    prescription.prescription_created_user = "USER_001";
    prescription.prescription_patient_name = this.prescriptionAddForm.get('patientName').value;
    prescription.prescription_patient_age = this.prescriptionAddForm.get('age').value;
    prescription.prescription_patient_gender = this.prescriptionAddForm.get('gender').value;
    prescription.prescription_patient_remark = this.prescriptionAddForm.get('remark').value;
    prescription.prescription_drugs = this.prescription_drugs
    
    this.prescriptionService.savePrescription(prescription)
      .subscribe((data) => {
        alert("Prescription Added Successfully...");
        this.prescriptionAddForm.reset();
        this.prescription_drugs = null;
      }, (error) => {
        alert("Prescription Added Successfully...");
        this.prescriptionAddForm.reset();
        this.prescription_drugs = null;
      })

  }

  onSubmit() {
    this.savePrescription();
  }

  loadPatients() {
    this.customerService.loadCustomers()
      .subscribe(data => {
        this.patients = data.customers;
      })

  }

  loadDrugs() {
    this.drugService.getAllDrugs()
      .subscribe(data => {
        this.drugs = data.drugs;
      })

  }

  //add drug to the table
  addDrug() {
    var item = new items;
    item.prescription_item_drug_name = this.prescriptionAddForm.get('drugName').value;
    item.prescription_item_frequency = this.prescriptionAddForm.get('frequency').value;
    item.prescription_item_dosage = this.prescriptionAddForm.get('dosage').value;
    item.prescription_item_period = this.prescriptionAddForm.get('period').value;
    item.prescription_item_quantity= this.prescriptionAddForm.get('quantity').value;

    this.prescription_drugs.push(item);
  }

  //remove drug from the table
  deleteDrug(index) {
    this.prescription_drugs.splice(index, 1);
  }

}

class items {
  prescription_item_drug_name: String;
  prescription_item_frequency: String;
  prescription_item_dosage: String;
  prescription_item_period: String;
  prescription_item_quantity: String;
}