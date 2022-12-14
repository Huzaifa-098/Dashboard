import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  isReportingEnabled = false;
  isScheduledRepEnabled = false;
  showFiller = false;
  showFiller2 = false;
  panelOpenState = true;

  constructor() {}

  ngOnInit(): void {}
  logout() {}
  openClosePanel() {}
}
