import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PharmDrugComponent } from './pharm-drug/pharm-drug.component';
import { PharmDrugAddComponent } from './pharm-drug/pharm-drug-add/pharm-drug-add.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmDrugComponent,
    PharmDrugAddComponent,
    CommonNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
