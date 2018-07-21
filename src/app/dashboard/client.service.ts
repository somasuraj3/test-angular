import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigService, Config } from '../config.service';
import { ClientListItem } from './client-list/client-list-item';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit {

  config: Config;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.config = this.configService.config;
  }

  searchClients(
    startDate: string, endDate: string, key: string, searchTerm: string, page: string, size: string):
    Observable<ClientListItem[]> {

    // Add safe, URL encoded search parameter if there is a search term
    const options = {
      params: new HttpParams()
        .set('startDate', startDate)
        .set('endDate', endDate)
        .set('key', key)
        .set('searchTerm', searchTerm)
        .set('page', page)
        .set('size', size)
    };

    return this.http.get<ClientListItem[]>(this.config.apiUrl + '/suraj.soma/clients/getall', options)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
