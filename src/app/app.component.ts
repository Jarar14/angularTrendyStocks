import { Component } from '@angular/core';
import { StockService } from './stock.service';
declare let document
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString = '';
  companyData:any;
  newsData:any;
  trendsData:any;
  logoData:any;

  constructor(public stockService: StockService)
  {
  }

  search(){
    this.searchString = document.getElementById('search').value as string;
    this.stockService.getOverview(this.searchString).subscribe((result)=>{
      ///code goes here
        this.companyData = result;
        console.log(this.companyData);
    });

    this.stockService.getLogo(this.searchString).subscribe((result)=>{
      ///code goes here
      this.logoData = result;
      console.log(this.logoData);
    });

    this.stockService.getNews(this.searchString).subscribe((result)=>{
      ///code goes here
      this.newsData = result;
      console.log(this.newsData);
    })

    this.stockService.getChart(this.searchString).subscribe((result)=>{
      ///code goes here
      this.trendsData = result;
      console.log(this.trendsData);
    });





  }

}
