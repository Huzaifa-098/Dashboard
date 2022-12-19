import { ApiService } from './../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  data1: any;
  name: any;
  benefit: any;
  protien: any;
  infoFor: FormGroup;
  formValues: any;
  newInfo: any;
  newData: any;
  // name = new FormControl('', [Validators.required]);
  // benefit = new FormControl('', [Validators.required]);
  // protien = new FormControl('', [Validators.required]);
  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private dailogRef: MatDialogRef<any>,
    private router: Router
  ) {
    // ApiService.add().subscribe((data) => (this.data1 = data));
  }

  fetchData() {
    this.ApiService.get().subscribe((data) => {
      this.data = data;
    });
  }
  ngOnInit(): void {
    this.fetchData();
    console.log(this.data);
    console.log(this.data.name);
    this.infoFor = new FormGroup({
      name: new FormControl(),
      benefit: new FormControl(),
      protien: new FormControl(),
      _id: new FormControl(),
    });
    this.infoFor = this.fb.group({
      _id: this.data._id,
      name: ['', [Validators.required]],
      benefit: ['', [Validators.required]],
      protien: ['', [Validators.required]],
    });

    name: this.infoFor.controls['name'].setValue(this.data.name);
    benefit: this.infoFor.controls['benefit'].setValue(this.data.benefit);
    protien: this.infoFor.controls['protien'].setValue(this.data.protien);
    _id: this.data._id;
  }

  update() {
    // let data = {
    //   name: this.name.value,
    //   benefit: this.benefit.value,
    //   protien: this.protien.value,
    // };
    // this.ApiService.addData(data).subscribe((result) => {})
    //   alert('Data Added Successfully');
    //   console.log(data);
    //   console.log(this.infoFor);
    //   this.ngOnInit();
    // });

    console.log(this.infoFor.value);
    this.ApiService.putRequest(this.infoFor.value).subscribe((result) => {
      this.dailogRef.close();
    });

    // this.fetchData();
    // this.ngOnInit();
  }
}
