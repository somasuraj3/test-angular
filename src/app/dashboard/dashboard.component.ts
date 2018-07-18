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

  constructor() { }

  ngOnInit() {
  }

  search(isFilterDate: Boolean, startDate: string, endDate: string, searchKey: string, searchTerm: string) {
    if (isFilterDate) {
      console.log("isFilterDate : " + isFilterDate);
      console.log("StartDate : " + startDate);
      console.log("EndDate : " + endDate);
      console.log("SearchKey : " + searchKey);
      console.log("SearchTerm : " + searchTerm);
    } else if (isFilterDate == false) {
      console.log("isFilterDate : " + isFilterDate);
      console.log("StartDate : " + startDate);
      console.log("EndDate : " + endDate);
      console.log("SearchKey : " + searchKey);
      console.log("SearchTerm : " + searchTerm);
    }
  }
}
