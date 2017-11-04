import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClarityModule} from 'clarity-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PharmDrugComponent} from './pharm-drug/pharm-drug.component';
import {PharmDrugAddComponent} from './pharm-drug/pharm-drug-add/pharm-drug-add.component';
import {CommonNavbarComponent} from './common-navbar/common-navbar.component';
import {CommonSidebarComponent} from './common-sidebar/common-sidebar.component';
import {PharmDrugUpdateComponent} from './pharm-drug/pharm-drug-update/pharm-drug-update.component';

import {PharmCustomerComponent} from './pharm-customer/pharm-customer.component';
import {PharmCustomerAddComponent} from './pharm-customer/pharm-customer-add/pharm-customer-add.component';
import {PharmCustomerUpdateComponent} from './pharm-customer/pharm-customer-update/pharm-customer-update.component';

import {PharmManufacturerComponent} from './pharm-manufacturer/pharm-manufacturer.component';
import {PharmManufacturerAddComponent} from './pharm-manufacturer/pharm-manufacturer-add/pharm-manufacturer-add.component';
import {PharmManufacturerUpdateComponent} from './pharm-manufacturer/pharm-manufacturer-update/pharm-manufacturer-update.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PharmDrugRequestComponent} from './pharm-drug-request/pharm-drug-request.component';
import {PharmDrugRequestUpdateComponent} from './pharm-drug-request/pharm-drug-request-update/pharm-drug-request-update.component';
import {PharmDrugRequestAddComponent} from './pharm-drug-request/pharm-drug-request-add/pharm-drug-request-add.component';
import {PharmSupplierComponent} from './pharm-supplier/pharm-supplier.component';
import {PharmSupplierAddComponent} from './pharm-supplier/pharm-supplier-add/pharm-supplier-add.component';
import {PharmSupplierUpdateComponent} from './pharm-supplier/pharm-supplier-update/pharm-supplier-update.component';

import {HeaderNavComponent} from './shared/header-nav/header-nav.component';
import {UserService} from './shared/services/user.service';
import {ApiService} from './shared/services/api.service';
import {JwtService} from './shared/services/jwtservice.service';
import {Http, HttpModule} from '@angular/http';
import {ShowIfAuthedDirective} from './shared/show-if-authed.directive';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {CustomerService} from './shared/services/customer.service';
import {ManufacturerService} from './shared/services/manufacturer.service';
import { PharmManufacturerSearchComponent } from './pharm-manufacturer/pharm-manufacturer-search/pharm-manufacturer-search.component';
import { PharmCustomerSearchComponent } from './pharm-customer/pharm-customer-search/pharm-customer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmDrugComponent,
    PharmDrugAddComponent,
    PharmCustomerComponent,
    PharmCustomerAddComponent,
    PharmManufacturerComponent,
    PharmManufacturerAddComponent,
    PharmCustomerUpdateComponent,
    CommonNavbarComponent,
    CommonSidebarComponent,
    PharmDrugUpdateComponent,
    PharmManufacturerUpdateComponent,
    PharmDrugRequestComponent,
    PharmDrugRequestAddComponent,
    PharmDrugRequestUpdateComponent,
    PharmSupplierComponent,
    PharmSupplierAddComponent,
    PharmSupplierUpdateComponent,
    HeaderNavComponent,
    ShowIfAuthedDirective,
    PharmManufacturerSearchComponent,
    PharmCustomerSearchComponent,
    PharmManufacturerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: PharmDrugComponent},
      {path: 'addDrug', component: PharmDrugAddComponent},
      // {path: 'addCustomer', component: PharmCustomerAddComponent,
      //   canActivate : [AuthGuardService]},
      // { path : 'updateCustomer' , component : PharmCustomerUpdateComponent},
      // {path: 'addManufacturer', component: PharmManufacturerAddComponent},
      // { path : 'updateManufacturer' , component : PharmManufacturerUpdateComponent},
      { path : 'updateDrug' ,
        component :
        PharmDrugUpdateComponent,
        canActivate : [AuthGuardService]}
    ])
  ],
  providers: [UserService, ApiService, JwtService, AuthGuardService, CustomerService, ManufacturerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
