import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from './ApiResponse';

 

@Injectable({ providedIn: 'root' })
export class SignUpService {

    constructor(
        private _http: HttpClient
    ) { }

 

    public enquiryAction(SignUpModel): Observable<ApiResponse> {
     if(!SignUpModel) { 
          return; 
          }
        const url = `192.168.0.119:3001/api/register/Register`;
 
        return this._http.post(url, SignUpModel, { responseType: 'json', observe: 'body' });
    }
}