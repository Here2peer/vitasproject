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
  }


  public getRides() {
    this.rides = [];
    this.ridesService.getRides().subscribe(rides => {
      if (rides.length > 0) {
        this.rideDisplayedColumns = Object.keys(rides[0]);
        this.rides = rides;
      }
    });
  }

  public getRide(id: number) {
    if (id == null) {
      return;
    }
    this.rides = [];
    this.ridesService.getRide(id).subscribe(ride => {
      if (ride != null) {
        this.rideDisplayedColumns = Object.keys(ride);
        this.rides = [ride];
      }
    });
  }

  public getStops() {
    this.stops = [];
    this.stopsService.getStops().subscribe(stops => {
      if (stops.length > 0) {
        this.stopDisplayedColumns = Object.keys(stops[0]);
        this.stops = stops;
      }
    });
  }

  public getStop(id: number) {
    if (id == null) {
        return;
    }
    this.stops = [];
    this.stopsService.getStop(id).subscribe(stop => {
      if (stop != null) {
        this.stopDisplayedColumns = Object.keys(stop);
        this.stops = [stop];
      }
    });
  }



  public getOrder(id: number) {
    if (id == null) {
        return;
    }
    this.orders = [];
    this.orderService.getOrder(id).subscribe(order => {
      if (order != null) {
        this.orderDisplayedColumns = Object.keys(order);
        this.orders = [order];
      }
    });
  }
}
