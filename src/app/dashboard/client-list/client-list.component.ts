import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ClientListItem } from './client-list-item';
import { ClientService } from '../client.service';
import { SearchClientComponent } from '../search-client/search-client.component';
import { SearchClientParams } from '../search-client-params';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnChanges {

  @Input() searchFilter: SearchClientParams;
  @Input() page: string;
  @Input() size: string;

  clients: ClientListItem[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClientList();
  }

  getClientList() {

  }

  ngOnChanges() {
    console.log('Client Filter Changed : ');
    console.log(this.searchFilter);
    console.log('Page : ' + this.page);
    console.log('Size : ' + this.size);
  }

}
