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

    
  }

}
