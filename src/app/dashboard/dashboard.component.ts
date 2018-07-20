import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchKeys: string[] = ['Created By', 'Client Name'];
  pageSizeLimit: number[] = [5, 10, 15, 20];
  today = Date.now();
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { apiUrl: data['apiUrl'] }, // success path
        error => this.error = error // error path
      );
    console.log('Config : ' + this.config);
  }

  searchClients(isFilterDate: Boolean, startDate: string, endDate: string, searchKey: string, searchTerm: string) {
    if (isFilterDate) {
      console.log('isFilterDate : ' + isFilterDate);
      console.log('StartDate : ' + startDate);
      console.log('EndDate : ' + endDate);
      console.log('SearchKey :' + searchKey);
      console.log('SearchTerm : ' + searchTerm);
    } else if (isFilterDate === false) {
      console.log('isFilterDate : ' + isFilterDate);
      console.log('StartDate : ' + startDate);
      console.log('EndDate : ' + endDate);
      console.log('SearchKey :' + searchKey);
      console.log('SearchTerm : ' + searchTerm);
    }
    console.log(this.config);
  }
}
