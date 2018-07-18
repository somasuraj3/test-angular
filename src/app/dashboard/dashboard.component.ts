import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchKeys: string[] = ['Created By', 'Client Name'];
  pageSizeLimit: number[] = [5, 10, 15, 20];
  today = Date.now();

  dateFilter: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
