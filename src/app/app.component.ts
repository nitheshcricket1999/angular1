import { Component } from '@angular/core';

export interface PeriodicElement {
  patient_id: string;
  position: number;
  report: string;
  scan: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, patient_id:'test_123', report:'Available', scan: '03-jan-2020'},
  {position: 2, patient_id:'test_123', report:'Available',scan: '03-jan-2020' },
  {position: 3, patient_id:'test_123', report:'Available', scan: '03-jan-2020'},
  {position: 4, patient_id:'test_123', report:'Available', scan: '03-jan-2020'},
  {position: 5, patient_id:'test_123', report:'Available', scan: '03-jan-2020'},
  ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    displayedColumns: string[] = ['position', 'patient_id', 'scan', 'report','actions'];
    dataSource = ELEMENT_DATA;
}