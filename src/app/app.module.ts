import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankinfoService } from './SERVICE/bankinfo.service';
import { BankdisplayComponent } from './PAGES/bankdisplay/bankdisplay.component';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BankdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BankinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
