import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent implements OnInit {
  constructor(private ApiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    localStorage.clear();

    this.router.navigate(['/auth']);
  }
}
