import { addData } from './../../../environments/environment';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { add } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  editOrAdd: boolean;
  infoFor: FormGroup;
  formValues: any;
  name = new FormControl('', [Validators.required]);
  benefit = new FormControl('', [Validators.required]);
  protien = new FormControl('', [Validators.required]);
  constructor(
    private ApiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.infoFor = this.fb.group({
      name: ['', [Validators.required]],
      benefit: ['', [Validators.required]],
      protien: ['', [Validators.required]],
    });
  }
  addData1() {
    let data = {
      name: this.name.value,
      benefit: this.benefit.value,
      protien: this.protien.value,
    };
    this.ApiService.addData(data).subscribe((result) => {
      this.dialogRef.close();
      alert('Data Added Successfully');
      console.log(data);
      console.log(this.infoFor);
    });
  }
}
