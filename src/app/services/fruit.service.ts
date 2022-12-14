import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor() {}
  fruit() {
    return [
      { Name: 'Almond', Create: 'Healthy Fruit', Action: 'Healthy' },
      { Name: 'Dates', Create: 'Healthy Fruit', Action: 'Healthy' },
      { Name: 'Mix Dry Fruit', Create: 'Healthy Fruit', Action: 'Healthy' },
    ];
  }
}
