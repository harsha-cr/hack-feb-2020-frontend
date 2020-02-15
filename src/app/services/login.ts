
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from 'app/models/api-response';
import { LoginModel } from 'app/models/loginModel';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(
        private _http: HttpClient
    ) { }

    public loginAction(model: LoginModel): Observable<ApiResponse> {
        if (!model) {
            return null;
        }
        const url = `${window['API_URI']}/login/`;

        return this._http.post(url, model, { responseType: 'json', observe: 'body' });
    }

    public logOutAction(userId: number): Observable<ApiResponse> {
        if (!userId) {
            return null;
        }
        const url = `${window['API_URI']}/login/logout/${userId}/`;

        return this._http.delete(url, { responseType: 'json', observe: 'body' });
    }

}
