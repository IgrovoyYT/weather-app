import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {WeatherInterface} from "./weather.interface";
import {IpAddressService} from "../ip-address.service";
import {IpInterface} from "./ip.interface";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  search: string = ''
  ip: any
  // @ts-ignore
  ipData: IpInterface = {}
  weather = {
    name: '',
    temp: 0,
    description: ''
  }

  constructor(
    private service: WeatherService,
    private ipService: IpAddressService
  ) {
  }

  ngOnInit(): void {
    this.ipService.getIpAddress().subscribe({
      next: value => this.ip = value,
      complete: () => {
        this.ipService.getGEOLocation(this.ip.ip).subscribe({
          next: value => this.ipData = value
        })
      }
    })
    this.getWeatherByCityName()
  }

  getWeatherByCityName(): void {
 this.service.getWeatherByCityName(this.search).subscribe({
   next: value => {
     this.weather.name = value.name
     this.weather.temp = value.main.temp
     this.weather.description = value.weather[0].description
   }
 })
  }

  setCityByLocation(): void {
    this.service.getWeatherByLatLng(this.ipData.latitude, this.ipData.longitude).subscribe({
      next: value => {
        this.weather.name = value.name
        this.weather.temp = value.main.temp
        this.weather.description = value.weather[0].description
      }
    })
  }

}