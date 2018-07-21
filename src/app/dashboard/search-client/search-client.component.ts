import { Component, OnInit, Output, EventEmitter, AfterContentInit, Input } from '@angular/core';
import { SearchClientParams } from '../search-client-params';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {
  today: number = Date.now();
  searchKeys: Object[] = [
    {
      key: 'username',
      value: 'Created By'
    },
    {
      key: 'clientfirstname',
      value: 'Client Name'
    }
  ];

  search: any;

  value: SearchClientParams;

  @Output() filter = new EventEmitter<SearchClientParams>();

  constructor() { }

  ngOnInit() {

  }

  getClientFilter(filterDate: Boolean, startDate: string, endDate: string, key: string, searchTerm: string) {
    this.filter.emit(new SearchClientParams(
      filterDate ? startDate : null,
      filterDate ? endDate : null,
      key,
      searchTerm));
    console.log('searched');
  }

}
