import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeadlinesResponse } from '../interface/interface';
import { environment } from '../../environments/environment';

const apikey = environment.apikey;
const apiurl = environment.apiurl;
const headers = new HttpHeaders({
  'X-Api-key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;
  categoryViewInPage = '';
  categoryPage = 0;

  constructor( private http: HttpClient ) {}

  public execQuery<T>(query: string) {
    query = apiurl + query;
    return this.http.get<T>(query, { headers });
  }

  getHeadlines() {
    this.headlinesPage++;
    return this.execQuery<HttpHeadlinesResponse>(`/top-headlines?country=us&page=${this.headlinesPage}`);
  }

  getHeadlinesCatgegoria( categoria: string ) {

    // Category page get data
    if(this.categoryViewInPage === categoria) {
      this.categoryPage++;
    } else {
      this.categoryPage = 1;
      this.categoryViewInPage = categoria;
    }

    return this.execQuery<HttpHeadlinesResponse>(`/top-headlines?country=us&category=${categoria}&page=${this.categoryPage}`);
  }

}
