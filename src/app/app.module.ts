import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PharmDrugComponent } from './pharm-drug/pharm-drug.component';
import { PharmDrugAddComponent } from './pharm-drug/pharm-drug-add/pharm-drug-add.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { CommonSidebarComponent } from './common-sidebar/common-sidebar.component';
import { PharmDrugUpdateComponent } from './pharm-drug/pharm-drug-update/pharm-drug-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmDrugComponent,
    PharmDrugAddComponent,
    CommonNavbarComponent,
    CommonSidebarComponent,
    PharmDrugUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '' , component : PharmDrugComponent},
      { path : 'addDrug' , component : PharmDrugAddComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
