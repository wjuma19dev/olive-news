import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeadlinesResponse } from '../interface/interface';
import { environment } from '../../environments/environment';

const apikey = environment.apikey;
const apiurl = environment.apiurl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) {}

  getHeadlines() {
    return this.http.get<HttpHeadlinesResponse>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=93737efac5774e2b9b125639f9ac0718`);
  }

  getHeadlinesCatgegoria( catego