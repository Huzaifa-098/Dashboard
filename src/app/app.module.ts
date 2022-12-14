import { EditDataComponent } from './project/edit-data/edit-data.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './project/dashboard/dashboard.component';
import { DailogComponent } from './project/dailog/dailog.component';
import { DryfruitDetailsComponent } from './project/dryfruit-details/dryfruit-details.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { NavComponent } from './project/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoComponent } from './project/info/info.component';
import { NavbarComponent } from './project/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {
  HighchartsChartComponent,
  HighchartsChartModule,
} from 'highcharts-angular';
import { OtpComponent } from './project/otp/otp.component';

import { HiChartComponent } from './project/hi-chart/hi-chart.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DryfruitDetailsComponent,
    DailogComponent,
    SideNavComponent,
    NavComponent,
    EditDataComponent,
    NavbarComponent,
    InfoComponent,
    HiChartComponent,
    OtpComponent,
    ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    NgbModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
