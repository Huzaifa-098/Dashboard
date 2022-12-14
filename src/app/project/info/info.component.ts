import { UserDataService } from './../../services/user-data.service';
import { Observable } from 'rxjs';
// import { HomePageComponent } from './../home-page/home-page.component';
import { FruitService } from '../../services/fruit.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditDataComponent } from '../edit-data/edit-data.component';
export interface PeriodicElement {
  Name: string;
  Create: string;
  Action: number;
  symbol: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Create', 'Action', 'symbol'];
  // dataSource: any;
  dataSource: any;
  // = ELEMENT_DATA;
  dailog: any;
  users: any;
  constructor(public dailo: MatDialog, private fruit: FruitService) {
    {
      // this.users = fruit.fruit();
      console.warn(fruit.fruit());
      this.dataSource = fruit.fruit();
      // FruitService.fruit().
    }
  }

  ngOnInit(): void {}
  OpenModal() {
    this.dailo.open(EditDataComponent);
  }
  OpenModal2() {
    this.dailo.open(EditDataComponent);
  }
  update(uname: any) {
    this.dataSource.data.push({
      Name: uname.value,
    });
  }
  onDelete() {
    this.dataSource.data.splice(this.dataSource.length - 1);
  }
}
