import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../config.service';
import { SearchClientParams } from './search-client-params';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageSizeLimit: number[] = [5, 10, 15, 20];
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {

  }

  searchClients(searchClientParams: SearchClientParams, page: string, size: string) {
    console.log('In print searchClientParams');
    console.log('Search Parameters : ' + JSON.stringify(searchClientParams));
    console.log('Page : ' + page);
    console.log('Size : ' + size);
  }
}
