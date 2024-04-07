import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Employee {
  department: string;
  total: number;
  male: number;
  female: number;
  children?: Employee[];
}

@Component({
  selector: 'lib-dashboardtotalemployeechart',
  templateUrl: './dashboard-totalemployee-chart.component.html',
  styleUrl: './dashboard-totalemployee-chart.component.css',
})
export class DashboardTotalEmployeeChartComponent{
  title = 'Responsive';
  employees: Employee[] = [
    {
      department: 'BACK OFFICE',
      total: 100,
      male: 60,
      female: 40,
      children: [
        { department: 'BOD', total: 40, male: 30, female: 10 },
        { department: 'DC2', total: 40, male: 20, female: 20 },
        { department: 'KTC', total: 20, male: 10, female: 10 },
      ],
    },
    {
      department: 'Phần mềm DX',
      total: 100,
      male: 60,
      female: 40,
      children: [
        { department: 'DXC', total: 40, male: 30, female: 10 },
        { department: 'DXS', total: 50, male: 30, female: 20 },
      ],
    },
    {
      department: 'Trung tâm CDC',
      total: 100,
      male: 60,
      female: 40,
      children: [
        { department: 'HCS', total: 50, male: 30, female: 20 },
        { department: 'ERP', total: 40, male: 30, female: 20 },
      ],
    },
  ];

  toggleChildren(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const parentBar = target.closest('.parent-bar');
    if (parentBar) {
      parentBar.classList.toggle('hiden-children');
    }
  }
}
