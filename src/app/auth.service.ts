import { Injectable } from '@angular/core';
import { ConfigService, Config } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  config: Config;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.config = configService.getConfig();
  }

  authenticate(){
    
  }


}
