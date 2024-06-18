import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseServerUrl = 'https://localhost:7096/api/'

  loginUser(loginInfo: Array<string>) {
    return this.http.post(this.baseServerUrl + 'loignUser', {
      Email: loginInfo[0],
      Pwd: loginInfo[1]
    },
      {
        responseType: 'text',
      }

    );

  }
}
