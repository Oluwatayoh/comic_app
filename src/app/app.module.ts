import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconModule, menu } from 'ng-heroicon';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityService } from './services/utility.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IntelliveerHTTPInterceptor } from './helper/http_interceptor';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PatientChartComponent } from './pages/patient-chart/patient-chart.component';
import { PatientFlowComponent } from './pages/patient-flow/patient-flow.component';
import { PracticeToolComponent } from './pages/practice-tool/practice-tool.component';
import { PracticeManagementComponent } from './pages/practice-management/practice-management.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CheckinCheckoutComponent } from './pages/checkin-checkout/checkin-checkout.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, LoginComponent, DashboardComponent, AppointmentComponent, PatientChartComponent, PatientFlowComponent, PracticeToolComponent, PracticeManagementComponent, ReportsComponent, CheckinCheckoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    HeroIconModule.forRoot(
      {
        menu,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
  ],
  providers: [
    UtilityService,
    // Resolvers come here,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntelliveerHTTPInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
