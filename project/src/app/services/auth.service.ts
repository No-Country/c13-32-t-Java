import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://reqres.in/api/login'; // La URL de tu servidor Java

  constructor(private http: HttpClient) { }
  // Login del usuario en ReqRes
  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    }


    return this.http.post(`${this.baseUrl}/login`, body);
  }
  
}
