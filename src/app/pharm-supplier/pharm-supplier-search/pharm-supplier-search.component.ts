import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SupplierService } from '../../shared/services/supplier.service';

@Component({
  selector: 'app-pharm-supplier-search',
  templateUrl: './pharm-supplier-search.component.html',
  styleUrls: ['./pharm-supplier-search.component.css']
})
export class PharmSupplierSearchComponent implements OnInit {

  supplierUpdateForm: FormGroup;
  supplierList = []
  paymentDetails = [];
  showUpdate = false;
  constructor(private supplierService : SupplierService) { }

  ngOnInit() {
    this.supplierUpdateForm = new FormGroup({
      searchSupplier: new FormControl('', Validators.required)
    });
  }

  searchSuppliers(){
    var searchKeyword = this.supplierUpdateForm.get('searchSupplier').value;
    console.log(searchKeyword);
    this.supplierService.loadSuppliers()
    .subscribe(data =>{
      this.supplierList = data.suppliers.filter(item => {
        if(item.supplier_name != undefined && item.supplier_name.includes(searchKeyword)){
          return true;
        }
        else{
          return false;
        }
        
      });

      if(this.supplierList.length == 0){
        alert("No Suppliers found for above keyword...");
      }
      console.log( this.supplierService);
    })
  }

  displayPaymentDetails(payDetails){
    this.paymentDetails = payDetails;
    this.showUpdate = true;
  }

}
