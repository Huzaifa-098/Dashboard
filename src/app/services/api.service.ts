import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, Url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private htpp: HttpClient) {}
  login(data: any): Observable<any> {
    console.log('I am server');

    return this.htpp.post(`${baseUrl}login`, data);
  }
  signup(data: any): Observable<any> {
    console.log('I am sigup server');

    return this.htpp.post(`${Url}signup`, data);
  }
}
