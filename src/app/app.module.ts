import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from "./weather.service";
import {HttpClientModule} from "@angular/common/http";
import {IpAddressService} from "./ip-address.service";
import {FormsModule} from "@angular/forms";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule
  ],
  providers: [
    WeatherService,
    IpAddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
