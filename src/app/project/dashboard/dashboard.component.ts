import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { EditDataComponent } from '../edit-data/edit-data.component';
export interface PeriodicElement {
  Name: string;
  Create: string;
  Action: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { Name: 'Huzaifa', Create: 'Huzaifa', Action: 1.0079, symbol: 'H' },
  { Name: 'Kashif', Create: 'Helium', Action: 4.0026, symbol: 'He' },
  { Name: 'Abdullah', Create: 'Lithium', Action: 6.941, symbol: 'Li' },
  { Name: 'Basit', Create: 'Beryllium', Action: 9.0122, symbol: 'Be' },
  { Name: 'Talal', Create: 'Boron', Action: 10.811, symbol: 'B' },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Create', 'Action', 'symbol'];
  // dataSource: any;
  dataSource = ELEMENT_DATA;

  constructor(public dailog: MatDialog) {}

  ngOnInit(): void {}
  openmodal() {
    this.dailog.open(EditDataComponent);
  }
}
