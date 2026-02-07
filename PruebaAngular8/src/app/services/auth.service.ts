import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://reqres.in/api/login';
  
  private cabeceras : HttpHeaders = new HttpHeaders(
    {'Content-Type' : 'application/json',
   'x-api-key': 'reqres_4555547eb0744fdeb5b2bb999c3cf7c4'
  })

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.apiUrl, body, {headers: this.cabeceras});
  }

  login2(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.apiUrl, body).pipe(
      tap(response => {
        localStorage.setItem('token', response.tolen)
      })
    );
  }
}
