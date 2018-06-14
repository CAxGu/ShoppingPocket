import { Component, OnInit } from '@angular/core';
import { MarketsService } from '../shared';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  zoom:number = 8;
  lat: number = 38.7827984;
  lng: number = -0.7851625;

  markets: Array <string> = [];
  locations: Array <string> = [];

  constructor(
    private marketsService: MarketsService,
  ) { }

  ngOnInit() {
      this.marketsService.getAll()
    .subscribe(markets=>{
      this.markets=markets;

      let loc = [];

      markets.forEach(function(market){
        let marketlat  = Number.parseFloat(market['lat']);
        let marketlng = Number.parseFloat(market['lng']);
        loc.push({'marketlat':marketlat,'marketlng':marketlng});

      });
      this.locations=loc;
    });
  }

}
