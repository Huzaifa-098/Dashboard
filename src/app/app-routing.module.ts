import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './project/dashboard/dashboard.component';
import { DryfruitDetailsComponent } from './project/dryfruit-details/dryfruit-details.component';
import { EditDataComponent } from './project/edit-data/edit-data.component';
import { HiChartComponent } from './project/hi-chart/hi-chart.component';
import { InfoComponent } from './project/info/info.component';
import { NavComponent } from './project/nav/nav.component';
import { NavbarComponent } from './project/navbar/navbar.component';
import { OtpComponent } from './project/otp/otp.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { SignupComponent } from './signup/signup.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'sign',
    component: SignupComponent,
  },
  {
    path: 'details',
    component: DryfruitDetailsComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'sidnav',
    component: SideNavComponent,
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'dash',
    component: DashboardComponent,
  },
  {
    path: 'edit',
    component: EditDataComponent,
  },
  {
    path: 'n',
    component: NavbarComponent,
  },
  {
    path: 'hi',
    component: HiChartComponent,
  },
  {
    path: 'otp',
    // canActivate: [AuthGuard],
    component: OtpComponent,
  },
  {
    path: 'tool',
    // canActivate: [AuthGuard],
    component: ToolBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
