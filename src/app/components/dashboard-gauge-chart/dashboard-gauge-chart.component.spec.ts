import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGaugeChartComponent } from './dashboard-gauge-chart.component';

describe('DashboardGaugeChartComponent', () => {
  let component: DashboardGaugeChartComponent;
  let fixture: ComponentFixture<DashboardGaugeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardGaugeChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
