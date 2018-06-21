import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payfix-list',
  templateUrl: './payfix-list.component.html',
  styleUrls: ['./payfix-list.component.css']
})
export class PayfixListComponent implements OnInit {

  items: any[];

  constructor() {
    this.items = [
      {
        'number': '1',
        'name': 'suraj',
        'date': '11-11-2011'
      },
      {
        'number': '2',
        'name': 'abhilash',
        'date': '01-01-2001'
      },
      {
        'number': '3',
        'name': 'vinay',
        'date': '12-12-2012'
      },
      {
        'number': '4',
        'name': 'hemant',
        'date': '10-10-2010'
      },
      {
        'number': '5',
        'name': 'rahul',
        'date': '09-09-2009'
      }
    ];
  }

  ngOnInit() {
  }

}
