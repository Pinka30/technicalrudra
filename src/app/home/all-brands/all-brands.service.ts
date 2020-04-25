import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AllBrands } from './all-brands';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class AllBrandsService{
    private allbrands_url: string='/assets/api/mobileList.json';
    // private topbrands_url: string='http://echo.jsontest.com/key/value/one/two';

    constructor(private _http: HttpClient){}

   
        allBrands(): Promise<any[]>{
        return this._http.get<any[]>('http://localhost:4200/assets/api/mobileList.json').toPromise();
    }


    // topBrands(): Observable<TopBrands[]>{
    //     return this._http
    //                 .get(this.topbrands_url)
    //                 .pipe(
    //                     map((response:Response)=><TopBrands[]>response.json()),
    //                     tap(data=>console.log(data)),
    //                     catchError(this.handleError));
    // }

    // private handleError(error: Response){
    //     let msg = 'Error status code ${error.status}status${error.statusText}at${error.url}';
    //     return Observable.throw(msg);
    // }
}