import {AfterViewInit, Component, OnChanges, SimpleChanges} from '@angular/core';
import {RidesService} from "../../../services/rides/rides.service";
import {Ride} from "../../../models/ride";
import {StopsService} from "../../../services/stops/stops.service";
import {OrdersService} from "../../../services/orders/orders.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements AfterViewInit{

  rides: Ride[] = [];

  ridesAmount: number = 0;
  ordersAmount: number = 0;
  stopsAmount: number = 0;

  private ridesService: RidesService;
  private stopService: StopsService;
  private orderService: OrdersService;
  constructor(ridesService: RidesService, stopService: StopsService, orderService: OrdersService) {
    this.ridesService = ridesService;
    this.stopService = stopService;
    this.orderService = orderService;
  }

  ngAfterViewInit() {
    this.stopService.getStopsAmount().subscribe(stopsAmount => {
      this.stopsAmount = stopsAmount;
    });
    this.orderService.getOrdersAmount().subscribe(ordersAmount => {
      this.ordersAmount = ordersAmount;
    });


    this.ridesService.getRides().subscribe(rides => {
      this.rides = rides;
      this.ridesAmount = rides.length;
    });
  }

}
