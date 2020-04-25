import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { AllBrandsMobile } from '../services/allbrands';

@Injectable({
  providedIn: 'root'
})
export class AllbrandsService {
  // private allbrands_url: string='/assests/api/mobileList.json';
  constructor(private _http: HttpClient) {   }

  allBrands(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/mobileList.json').toPromise();
  }

  topMobiles(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/topmobilebrands.json').toPromise();
  }

  latestStories(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/lateststories.json').toPromise();
  }

  scienceNtech(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/scienceNtech.json').toPromise();
  }

  laptops(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/laptop.json').toPromise();
  }

  gadgets(): Promise<any[]>{
    return this._http.get<any[]>('http://localhost:4200/assets/api/gadgets.json').toPromise();
  }

}
