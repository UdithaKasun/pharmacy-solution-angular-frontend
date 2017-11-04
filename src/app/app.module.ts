import { BrowserModule , } from '@angular/platform-browser';
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
    PharmSupplierUpdateComponent
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
        path : 'addSupplier', 
        component :PharmSupplierAddComponent
      },
      {
        path : 'updateSupplier', 
        component :PharmSupplierSearchComponent
      }
    ])
  ],
  providers: [UserService,ApiService,JwtService,AuthGuardService,DrugService,SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
