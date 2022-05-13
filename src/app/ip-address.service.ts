import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ip, IpInterface} from "./weather/ip.interface";
import {Observable} from "rxjs";

@Injectable()
export class IpAddressService {

  constructor(private http: HttpClient) { }


  getIpAddress(): Observable<Ip> {
    return this.http
      .get<Ip>('https://api.ipify.org/?format=json')
  }

  getGEOLocation(ip: string): Observable<IpInterface> {
    let url = 'https://api.ipgeolocation.io/ipgeo?apiKey=0a0a0d2d04714a5cafa3d0fa38e90797&ip='+ip;
    return this.http
      .get<IpInterface>(url)
  }


}
