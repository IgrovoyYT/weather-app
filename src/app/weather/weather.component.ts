import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Weather} from "./weather.interface";
import {IpAddressService} from "../ip-address.service";
import {Ip, IpInterface} from "./ip.interface";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  get localStorage() {
    return localStorage.getItem('weather')
  }
  options: any = {
    types: ['geocode'],
    fields: ['name']
  }
  // @ts-ignore
  ip: Ip = {}
  // @ts-ignore
  ipData: IpInterface = {}
  weather = JSON.parse(localStorage.getItem('weather') as any) || new Weather()

  constructor(
    private service: WeatherService,
    private ipService: IpAddressService
  ) {
  }

  ngOnInit(): void {
    this.getLocationByIp()
  }

  getLocationByIp(): void {
    this.ipService.getIpAddress().subscribe({
      next: value => this.ip = value,
      complete: () => {
        this.ipService.getGEOLocation(this.ip.ip).subscribe({
          next: value => this.ipData = value
        })
      }
    })
  }

  getWeatherByCityName(city: any): void {
    this.service.getWeatherByCityName(city?.name).subscribe({
      next: value => {
        this.weather.name = value.name
        this.weather.temp = value.main.temp
        this.weather.description = value.weather[0].description
        this.weather.icon = value.weather[0].icon
        this.weather.main = value.weather[0].main

        localStorage.setItem('weather', JSON.stringify(this.weather))
      }
    })
  }

  setCityByLocation(): void {
    this.service.getWeatherByLatLng(this.ipData.latitude, this.ipData.longitude).subscribe({
      next: value => {
        this.weather.name = value.name
        this.weather.temp = value.main.temp
        this.weather.description = value.weather[0].description
        this.weather.icon = value.weather[0].icon

        localStorage.setItem('weather', JSON.stringify(this.weather))

      }
    })
  }

}
