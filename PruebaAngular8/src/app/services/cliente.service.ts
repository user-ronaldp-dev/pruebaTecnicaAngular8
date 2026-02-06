import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ClienteService{

 
  constructor(public http : HttpClient) {

  }


  public listar(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>('https://randomuser.me/api');
}



   public listarConParams(method: string, params: HttpParams): Observable<any> {
        if (params != null) {
            return this.http.get('https://randomuser.me/api' + method, { params });
        } else {
            return this.http.get<any>('https://randomuser.me/api' + method);
        }
    }
}
