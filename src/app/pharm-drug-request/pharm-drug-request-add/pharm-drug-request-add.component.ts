import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharm-drug-request-add',
  templateUrl: './pharm-drug-request-add.component.html',
  styleUrls: ['./pharm-drug-request-add.component.css']
})
export class PharmDrugRequestAddComponent implements OnInit {

  constructor() { }

  customerAddForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.customerAddForm = new FormGroup({
    });
    this.submitted = false;
  }

  onSubmit() {

  }

}
