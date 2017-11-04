import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { SupplierService } from '../../shared/services/supplier.service';
import { Supplier } from '../../shared/models/supplier';

@Component({
  selector: 'app-pharm-supplier-add',
  templateUrl: './pharm-supplier-add.component.html',
  styleUrls: ['./pharm-supplier-add.component.css']
})
export class PharmSupplierAddComponent implements OnInit {

  drugAddSupplier: FormGroup;
  drugAddBankPayment: FormGroup;
  paymentDetails =[];
  showBankPaymentAdd = false;
  constructor(private supplierService : SupplierService) { }

  ngOnInit() {
    this.drugAddSupplier = new FormGroup({
      supplierName: new FormControl('', Validators.required),
      supplierContactNumber: new FormControl('', Validators.required),
      supplierContactEmail: new FormControl('', Validators.required) 
    });

    this.drugAddBankPayment = new FormGroup({
      paymentName: new FormControl('', Validators.required),
      bankName: new FormControl('', Validators.required),
      bankAccount: new FormControl('', Validators.required)
    });
  }

  showPaymentAdder(){
    this.showBankPaymentAdd = true;
  }

  addPayment(){
    this.paymentDetails.push({
      payment_name : this.drugAddBankPayment.get('paymentName').value,
      payment_bank_name : this.drugAddBankPayment.get('bankName').value,
      payment_bank_account_number : this.drugAddBankPayment.get('bankAccount').value,
    })

    this.showBankPaymentAdd = false;
  }
  
  removePayment(payment){
    var index = this.paymentDetails.indexOf(payment);
    if (index !== -1) {
      this.paymentDetails.splice(index, 1);
  }
  }

  saveSupplier(){
    var supplier = new Supplier();
    supplier.supplier_id = "";
    supplier.supplier_name = this.drugAddSupplier.get('supplierName').value;
    supplier.supplier_contact_number = this.drugAddSupplier.get('supplierContactNumber').value;
    supplier.supplier_contact_email_address = this.drugAddSupplier.get('supplierContactEmail').value;
    supplier.supplier_drugs = [];
    supplier.supplier_payment_details = this.paymentDetails;
    supplier.supplier_active = true;
    this.supplierService.saveSupplier(supplier)
    .subscribe((data) => {
      console.log(data);
      alert("Supplier Added Successfully...");
      this.drugAddSupplier.reset();
      this.drugAddBankPayment.reset();
      this.paymentDetails =[];
    },(error)=>{
      alert("Supplier Adding Failed");
      this.drugAddSupplier.reset();
      this.drugAddBankPayment.reset();
      this.paymentDetails =[];
    })
  }

}
