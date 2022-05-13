import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from "./weather.service";
import {HttpClientModule} from "@angular/common/http";
import {IpAddressService} from "./ip-address.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WeatherService,
    IpAddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
