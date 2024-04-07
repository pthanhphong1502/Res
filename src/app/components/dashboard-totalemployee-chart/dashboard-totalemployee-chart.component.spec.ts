import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTotalemployeeChartComponent } from './dashboard-totalemployee-chart.component';

describe('DashboardTotalemployeeChartComponent', () => {
  let component: DashboardTotalemployeeChartComponent;
  let fixture: ComponentFixture<DashboardTotalemployeeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTotalemployeeChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTotalemployeeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
