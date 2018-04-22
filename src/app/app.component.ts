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
  trendData:any;
  logoData:any;

  today:any;
  lastWeek:any;
  lastMonth:any;
  lastYear:any;
  lastWeekLow:any;
  lastWeekHigh:any;
  lastWeekPercentChange:any;
  lastMonthLow:any;
  lastMonthHigh:any;
  lastMonthPercentChange:any;
  lastYearLow:any;
  lastYearHigh:any;
  lastYearPercentChange:any;



  constructor(public stockService: StockService)
  {
  }

  search(){
    this.searchString = document.getElementById('search').value as string;
      this.stockService.getOverview(this.searchString).subscribe((result)=>{
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
    });

    this.stockService.getChart(this.searchString).subscribe((result)=>{
      ///code goes here
      this.trendData = result;

      this.today = this.trendData.length - 1;
      this.lastWeek = this.today - 7;
      this.lastMonth = this.today - 31;
      this.lastYear = this.today - 365;
      this.lastWeekLow = this.trendData[this.today].low;
      this.lastWeekHigh = this.trendData[this.today].high;
      this.lastWeekPercentChange = 0.0;
      this.lastMonthLow = this.trendData[this.today].low;
      this.lastMonthHigh = this.trendData[this.today].high;
      this.lastMonthPercentChange = 0.0;
      this.lastYearLow = this.trendData[this.today].low;
      this.lastYearHigh = this.trendData[this.today].high;
      this.lastYearPercentChange = 0.0;

      if (this.lastWeek >= 0)
            {
              for (var i = this.lastWeek; i <= this.today; i++)
              {
                if (this.trendData[i].high > this.lastWeekHigh)
                {
                  this.lastWeekHigh = this.trendData[i].high;
                }
                if (this.trendData[i].low < this.lastWeekLow)
                {
                  this.lastWeekLow = this.trendData[i].low;
                }
              }
              this.lastWeekPercentChange = (this.trendData[this.today].close - this.trendData[this.lastWeek].open) / this.trendData[this.lastWeek].open * 100;
              this.lastWeekPercentChange = Math.round(this.lastWeekPercentChange * 1000) / 1000.0;
            }
            if (this.lastMonth >= 0)
            {
              for (var i = this.lastMonth; i <= this.today; i++)
              {
                if (this.trendData[i].high > this.lastMonthHigh)
                {
                  this.lastMonthHigh = this.trendData[i].high;
                }
                if (this.trendData[i].low < this.lastMonthLow)
                {
                  this.lastMonthLow = this.trendData[i].low;
                }
              }
              this.lastMonthPercentChange = (this.trendData[this.today].close - this.trendData[this.lastMonth].open) / this.trendData[this.lastMonth].open * 100;
              this.lastMonthPercentChange = Math.round(this.lastMonthPercentChange * 1000) / 1000.0;

            }
            if (this.lastYear >= 0)
            {
              for (var i = this.lastYear; i <= this.today; i++)
              {
                if (this.trendData[i].high > this.lastYearHigh)
                {
                  this.lastYearHigh = this.trendData[i].high;
                }
                if (this.trendData[i].low < this.lastYearLow)
                {
                  this.lastYearLow = this.trendData[i].low;
                }
              }
              this.lastYearPercentChange = (this.trendData[this.today].close - this.trendData[this.lastYear].open) / this.trendData[this.lastYear].open * 100;
              this.lastYearPercentChange = Math.round(this.lastYearPercentChange * 1000) / 1000.0;
            }

      console.log(this.trendData);

    });





  }

}
