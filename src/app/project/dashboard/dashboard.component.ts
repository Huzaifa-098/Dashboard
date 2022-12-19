import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Url } from './../../../environments/environment';
import { ApiService } from './../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { AddDataComponent } from '../add-data/add-data.component';
import { Router } from '@angular/router';
// export interface PeriodicElement {
//   Name: string;
//   Create: string;
//   Action: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { Name: 'Huzaifa', Create: 'Huzaifa', Action: 1.0079, symbol: 'H' },
//   { Name: 'Kashif', Create: 'Helium', Action: 4.0026, symbol: 'He' },
//   { Name: 'Abdullah', Create: 'Lithium', Action: 6.941, symbol: 'Li' },
//   { Name: 'Basit', Create: 'Beryllium', Action: 9.0122, symbol: 'Be' },
//   { Name: 'Talal', Create: 'Boron', Action: 10.811, symbol: 'B' },
// ];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  id1: any;
  displayedColumns: string[] = ['name', 'benefit', 'protien', 'symbol'];
  // dataSource: any;
  addOrEdit: boolean;
  dataSource: any;
  data: any;
  _id: any;
  dialogRef: any;
  constructor(
    public dailog: MatDialog,
    private ApiService: ApiService,
    private http: HttpClient,
    private router: Router
  ) {
    // console.log(this.dataSource);
    // this.ApiService.add(data).subscribe((result) => {
  }

  ngOnInit(): void {
    this.ApiService.get().subscribe((data) => (this.dataSource = data));
  }
  openmodal() {
    // this.dailog.open(AddDataComponent);
    const dialogRef = this.dailog.open(EditDataComponent);
    dialogRef.afterClosed().subscribe((result) => {
      // debugger;
      this.ApiService.get().subscribe((data) => (this.dataSource = data));
      this.dataSource = new MatTableDataSource<any>();
    });
  }
  DeleteData(_id) {
    console.log(_id);
    this.ApiService.delete(_id).subscribe(() => {});
    // this.ApiService.addData(this.data).subscribe((_id) => {});
    this.ngOnInit();
    // this.http.delete('http://192.168.2.20:3000/api/delelte' + id);

    //     (data) => (this.dataSource = data)
    //   );l
    //   console.log(this.dataSource._id);
    // }
    // this.api.login(data).subscribe((result) => {

    //   });
  }
  EditData(element) {
    // console.log(element);
    // console.log(element._id);
    const dialogRef = this.dailog.open(EditDataComponent, { data: element });
    dialogRef.afterClosed().subscribe((result) => {
      // debugger;
      this.ApiService.get().subscribe((data) => (this.dataSource = data));
      this.dataSource = new MatTableDataSource<any>();
    });
    // localStorage.setItem('id', id);
    // const dialogRef = this.dailog.open(EditDataComponent, {
    //   data: element,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.dataSource = new MatTableDataSource<any>(;
    //   this.dailog.closeAll();
    //   console.log(this._id);
    // });
  }
}
