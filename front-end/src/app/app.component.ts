import {AfterViewInit, Component} from '@angular/core';
import {Stop} from "./models/stop";
import {StopsService} from "./services/stops/stops.service";
import {Ride} from "./models/ride";
import {RidesService} from "./services/rides/rides.service";
import {Order} from "./models/order";
import {OrdersService} from "./services/orders/orders.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [StopsService, RidesService],
})
export class AppComponent implements AfterViewInit{
  public stopId: number;
  public rideId: number;
  public orderId: number;

  public stops: Stop[]= [];

  public rides: Ride[] = [];

  public orders: Order[] = [];

  stopDisplayedColumns: string[] = [];
  rideDisplayedColumns: string[] = [];
  orderDisplayedColumns: string[] = [];

  stopTableHeaders: string[] = ['id', 'Stop number', 'Postcode', 'House number', 'Has been visited', 'Ride', 'Order'];
  rideTableHeaders: string[] = ['id', 'Ride number', 'Date', 'Description', 'Stops', 'Finished'];
  orderTableHeaders: string[] = ['id', 'Order number', 'Description', 'Stops'];
  constructor(private stopsService: StopsService, private ridesService: RidesService, private orderService: OrdersService) {
  }

  ngAfterViewInit(): void {
    this.getStops();
    this.getRides();
    this.getOrders();
  }


  public getRides() {
    this.rides = [];
    this.ridesService.getRides().subscribe(rides => {
      this.rideDisplayedColumns = Object.keys(rides[0]);
      this.rides = rides;
    });
  }

  public getRide(id: number) {
    this.rides = [];
    this.ridesService.getRide(id).subscribe(ride => {
      this.rideDisplayedColumns = Object.keys(ride);
      this.rides = [ride];
    });
  }

  public getStops() {
    this.stops = [];
    this.stopsService.getStops().subscribe(stops => {
      this.stopDisplayedColumns = Object.keys(stops[0]);
      this.stops = stops;
    });
  }

  public getStop(id: number) {
    this.stops = [];
    this.stopsService.getStop(id).subscribe(stop => {
      this.stopDisplayedColumns = Object.keys(stop);
      this.stops = [stop];
    });
  }

  public getOrders() {
    this.orders = [];
    this.orderService.getOrders().subscribe(orders => {
      this.orderDisplayedColumns = Object.keys(orders[0]);
      this.orders = orders;
    });
  }

  public getOrder(id: number) {
    this.orders = [];
    this.orderService.getOrder(id).subscribe(order => {
      this.orderDisplayedColumns = Object.keys(order);
      this.orders = [order];
    });
  }
}
