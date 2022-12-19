import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor(private http: HttpClient) {}
  fruit() {
    return [
      { Name: 'Almond', Create: 'Healthy Fruit', Action: 'Healthy' },
      { Name: 'Dates', Create: 'Healthy Fruit', Action: 'Healthy' },
      { Name: 'Mix Dry Fruit', Create: 'Healthy Fruit', Action: 'Healthy' },
    ];
  }
  // putRequest(url: string, data: Object) {
  //   return this.http.put<any>(`${url}`, data);
  // }
}
