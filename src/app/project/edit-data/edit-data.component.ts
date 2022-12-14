import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: any;
  age: any;

  infoFor = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    gender: new FormControl('Male'),
  });
  update() {}
}
