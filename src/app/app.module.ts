import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAgeChartComponent } from './components/dashboard-age-chart/dashboard-age-chart.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardGaugeChartComponent } from './components/dashboard-gauge-chart/dashboard-gauge-chart.component';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts'; // Import the ChartAllModule from the appropriate package
import { GridModule } from '@syncfusion/ej2-angular-grids'; // Import the GridModule from the appropriate package
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { FormsModule } from '@angular/forms';
import { DashboardTotalEmployeeChartComponent } from './components/dashboard-totalemployee-chart/dashboard-totalemployee-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAgeChartComponent,
    DashboardCardComponent,
    DashboardGaugeChartComponent,
    DashboardTotalEmployeeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartAllModule,
    GridModule,
    CircularGaugeModule,
    FormsModule,
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
