import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherInterface} from "./weather/weather.interface";

@Injectable()
export class WeatherService {

  link: string = 'https://api.openweathermap.org/data/2.5/weather';
  appid: string = '0d60857c2f153d6df04f817ff8dda224';
  constructor(private http: HttpClient) { }

  getWeatherByLatLng(lat: string, lon: string): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(this.link,{
      params: {
        lat,
        lon,
        appid: this.appid
      }
    })
  }
  getWeatherByCityName(name?: string): Observable<WeatherInterface> {
    if (!name) {
      name = 'Kyiv'
    }
    return this.http.get<WeatherInterface>(this.link,{
      params: {
        q: name,
        appid: this.appid
      }
    })
  }
}
