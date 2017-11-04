import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pharm-supplier-add',
  templateUrl: './pharm-supplier-add.component.html',
  styleUrls: ['./pharm-supplier-add.component.css']
})
export class PharmSupplierAddComponent implements OnInit {

  constructor() { }

  supplierAddForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.supplierAddForm = new FormGroup({
      supplier_name: new FormControl('', Validators.required),

    });
    this.submitted = false;
  }


  onSubmit() {

  }

}
