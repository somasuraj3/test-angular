import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit() {

  }

  

}
