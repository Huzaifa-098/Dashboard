import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //   thistoggleButton = document.getElementsByClassName('toggle-button')[0]
  // thisnavbarLinks = document.getElementsByClassName('navbar-links')[0]
  //   toggleButton.addEventListner('click',()=> {
  //    navbarlinks.classList.toggle('active')
  //   })

  // x:any

  constructor() {}

  isReportingEnabled = false;
  isScheduledRepEnabled = false;
  showFiller = false;
  showFiller2 = false;
  panelOpenState = true;

  ngOnInit(): void {}
  logout() {}
  openClosePanel1() {}
}

// datasets = [
//   {
//     label: 'Traffic',
//     data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
//   },
// ];

// labels = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];
// ngOnInit(): void {}

//   menuFunction() {
//     console.log("Function called")

//  this.x=document.getElementById("myLinks");
//     if (this.x.style.display === "block") {
//       this.x.style.display = "none";
//     // } else if { this.x.style.display = "none";

//       } else {
//         this.x.style.display = "block";

//       }

//     }
// }
