import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private baseUrl:string = "https://localhost:7096/api/controller/"

  loginUser(loginInfo: any) {
    return this.http.post(this.baseUrl + 'authenticate', {
      Email: loginInfo[0],
      Pwd: loginInfo[1]
    },
      {
        responseType: 'text',
      }

    );

  }
}
