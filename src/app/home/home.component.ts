import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public quote: string;
  public cnnImgUrl: Observable<string> = this.stockService.getTextReturn('http://localhost/cnn-img-url');
  public breadth: Observable<string> = this.stockService.getTextReturn('http://localhost/breadth');
  public math = Math;

  constructor(private breakpointObserver: BreakpointObserver, private stockService: StockService) {
    this.quote= this.stockService.quote();
  }

  percentage(breadth: string): number {
    return Number(breadth)/11.0;
  }

}
