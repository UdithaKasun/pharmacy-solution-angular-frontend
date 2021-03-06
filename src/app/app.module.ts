import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ClarityModule } from "clarity-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PharmDrugAddComponent } from './pharm-drug/pharm-drug-add/pharm-drug-add.component';
import { PharmDrugUpdateComponent } from './pharm-drug/pharm-drug-update/pharm-drug-update.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { UserService } from './shared/services/user.service';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwtservice.service';
import { Http } from '@angular/http';
import { ShowIfAuthedDirective } from './shared/show-if-authed.directive';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { DrugService } from './shared/services/drug.service';
import { PharmDrugSearchComponent } from './pharm-drug/pharm-drug-search/pharm-drug-search.component';
import { PharmSupplierAddComponent } from './pharm-supplier/pharm-supplier-add/pharm-supplier-add.component';
import { PharmSupplierSearchComponent } from './pharm-supplier/pharm-supplier-search/pharm-supplier-search.component';
import { PharmSupplierUpdateComponent } from './pharm-supplier/pharm-supplier-update/pharm-supplier-update.component';
import { SupplierService } from './shared/services/supplier.service';
import { PharmManufacturerComponent } from './pharm-manufacturer/pharm-manufacturer.component';
import { PharmManufacturerAddComponent } from './pharm-manufacturer/pharm-manufacturer-add/pharm-manufacturer-add.component';
import { PharmManufacturerUpdateComponent } from './pharm-manufacturer/pharm-manufacturer-update/pharm-manufacturer-update.component';
import { PharmCustomerComponent } from './pharm-customer/pharm-customer.component';
import { PharmCustomerAddComponent } from './pharm-customer/pharm-customer-add/pharm-customer-add.component';
import { PharmCustomerUpdateComponent } from './pharm-customer/pharm-customer-update/pharm-customer-update.component';
import { CustomerService } from './shared/services/customer.service';
import { ManufacturerService } from './shared/services/manufacturer.service';
import { PharmDrugStockComponent } from './pharm-drug/pharm-drug-stock/pharm-drug-stock.component';
import { PharmManufacturerSearchComponent } from './pharm-manufacturer/pharm-manufacturer-search/pharm-manufacturer-search.component';
import { PharmCustomerSearchComponent } from './pharm-customer/pharm-customer-search/pharm-customer-search.component';
import { PhramPrescriptionComponent } from './phram-prescription/phram-prescription.component';
import { PhramPrescriptionAddComponent } from './phram-prescription/phram-prescription-add/phram-prescription-add.component';
import { PhramPrescriptionSearchComponent } from './phram-prescription/phram-prescription-search/phram-prescription-search.component';
import { PhramPrescriptionUpdateComponent } from './phram-prescription/phram-prescription-update/phram-prescription-update.component';
import { PrescriptionService } from './shared/services/prescription.service';
import { PhramPrescriptionBillComponent } from './phram-prescription/phram-prescription-bill/phram-prescription-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmDrugAddComponent,
    PharmDrugUpdateComponent,
    HeaderNavComponent,
    ShowIfAuthedDirective,
    LoginComponent,
    PharmDrugSearchComponent,
    PharmSupplierAddComponent,
    PharmSupplierSearchComponent,
    PharmSupplierUpdateComponent,
    PharmCustomerAddComponent,
    PharmCustomerUpdateComponent,
    PharmManufacturerAddComponent,
    PharmManufacturerUpdateComponent,
    PharmDrugStockComponent,
    PharmCustomerSearchComponent,
    PharmManufacturerSearchComponent,
    PhramPrescriptionComponent,
    PhramPrescriptionAddComponent,
    PhramPrescriptionSearchComponent,
    PhramPrescriptionUpdateComponent,
    PhramPrescriptionBillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'searchDrug',
        component: PharmDrugSearchComponent
      },
      { path: 'addDrug', component: PharmDrugAddComponent },
      {
        path: 'updateDrug',
        component: PharmDrugUpdateComponent
      },
      {
        path: 'addSupplier',
        component: PharmSupplierAddComponent
      },
      {
        path: 'updateSupplier',
        component: PharmSupplierSearchComponent
      },
      {
        path: 'addManufacturer',
        component: PharmManufacturerAddComponent
      },
      {
        path: 'updateManufacturer',
        component: PharmManufacturerUpdateComponent
      },
      {
        path: 'updateCustomer',
        component: PharmCustomerUpdateComponent
      },
      {
        path: 'addCustomer',
        component: PharmCustomerAddComponent
      },
      {
        path: 'viewDrugStock',
        component: PharmDrugStockComponent
      },
      {
        path: 'searchManufacturer',
        component: PharmManufacturerSearchComponent
      },
      {
        path: 'searchCustomer',
        component: PharmCustomerSearchComponent
      },
      {
        path: 'searchPrescription',
        component: PhramPrescriptionSearchComponent
      },
      {
        path: 'addPrescription',
        component: PhramPrescriptionAddComponent
      },
      {
        path: 'updatePrescription',
        component: PhramPrescriptionUpdateComponent
      },
      {
        path: 'issueBill',
        component: PhramPrescriptionBillComponent
      }
    ])
  ],
  providers: [UserService, ApiService, JwtService, AuthGuardService, DrugService, SupplierService, CustomerService, ManufacturerService, PrescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
