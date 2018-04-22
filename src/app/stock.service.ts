import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StockService {

  constructor(public http:HttpClient) { }

  getOverview(searchString:string){
    console.log(searchString);
    return this.http.get('https://api.iextrading.com/1.0/stock/' + searchString + '/company');
  }

  getLogo(searchString:string){
    return this.http.get('https://api.iextrading.com/1.0/stock/' + searchString + '/logo');
  }

  getChart(searchString:string){
    return this.http.get('https://api.iextrading.com/1.0/stock/' + searchString + '/chart/5y');
  }
  getNews(searchString:string){
    return this.http.get('https://api.iextrading.com/1.0/stock/' + searchString + '/news');
  }

}
