import { Component, OnInit, Input } from '@angular/core';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-payfix-list-item',
  templateUrl: './payfix-list-item.component.html',
  styleUrls: ['./payfix-list-item.component.css']
})
export class PayfixListItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
