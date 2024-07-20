import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private baseUrl:string = "https://localhost:7096/api/controller/"

  loginUser(loginObj: any) {
  //   return this.http.post(this.baseUrl + 'authenticate', {
  //     Email: loginObj[0],
  //     Pwd: loginObj[1]
  //   },
  //     {
  //       responseType: 'text',
  //     }

  //   );
return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)

  }
}
