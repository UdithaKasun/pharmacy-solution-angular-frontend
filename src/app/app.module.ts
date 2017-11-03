import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ClarityModule } from "clarity-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PharmDrugComponent } from './pharm-drug/pharm-drug.component';
import { PharmDrugAddComponent } from './pharm-drug/pharm-drug-add/pharm-drug-add.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { CommonSidebarComponent } from './common-sidebar/common-sidebar.component';
import { PharmDrugUpdateComponent } from './pharm-drug/pharm-drug-update/pharm-drug-update.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { UserService } from './shared/services/user.service';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwtservice.service';
import { Http } from '@angular/http';
import { ShowIfAuthedDirective } from './shared/show-if-authed.directive';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PharmDrugComponent,
    PharmDrugAddComponent,
    CommonNavbarComponent,
    CommonSidebarComponent,
    PharmDrugUpdateComponent,
    HeaderNavComponent,
    ShowIfAuthedDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot([
      { path : 'login' , component : LoginComponent},
      { path : '' , redirectTo : '/login' , pathMatch:'full'},
      { path : 'addDrug' , component : PharmDrugAddComponent},
      { path : 'updateDrug' , 
      component : PharmDrugUpdateComponent,
      canActivate : [AuthGuardService]},
    ])
  ],
  providers: [UserService,ApiService,JwtService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
