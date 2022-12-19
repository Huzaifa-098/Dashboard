import { edit } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { add, baseUrl, logout, Url } from 'src/environments/environment';
import { FruitService } from './fruit.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  table: any;
  static delete: any;
  constructor(private http: HttpClient, private put: FruitService) {}
  login(data: any): Observable<any> {
    console.log('I am server');

    return this.http.post(`${baseUrl}login`, data);
  }
  signup(data: any): Observable<any> {
    console.log('I am sigup server');

    return this.http.post(`${Url}register`, data);
  }
  // table() {
  //   return this.htpp.post('http://192.168.2.20:3000/api/add`');
  // }
  get() {
    console.log('I am sigup server');

    return this.http.get('http://192.168.2.20:3000/api/get');
  }
  addData(data: any): Observable<any> {
    console.log('Add data');

    return this.http.post(`${Url}post`, data);
  }
  delete(_id: string): Observable<any> {
    console.log('Del data');
    console.log(Url);
    return this.http.delete(`${Url}delete/${_id}`);
  }
  putRequest(_id) {
    console.log('Huzaifa', _id._id);
    return this.http.patch(`${Url}edit/${_id._id}`, _id);
  }
}
