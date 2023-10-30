import {AfterViewInit, Component, OnChanges} from '@angular/core';
import {RidesService} from "../../../services/rides/rides.service";
import {Ride} from "../../../models/ride";
import {StopsService} from "../../../services/stops/stops.service";
import {Stop} from "../../../models/stop";
import {OrdersService} from "../../../services/orders/orders.service";
import {Order} from "../../../models/order";
import {MatListOption} from "@angular/material/list";

import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ongoing-ride',
  templateUrl: './ongoing-ride.component.html',
  styleUrls: ['./ongoing-ride.component.less']
})
export class OngoingRideComponent implements AfterViewInit {

    rides: Ride[];
    morphedRides: Ride[];

    stops: Stop[];
    morphedStops: Stop[] = [];
    rideStops: Stop[];
    orders: Order[];

    selectedRide: number;

    ridesService: RidesService;
    stopsService: StopsService;
    ordersService: OrdersService;

    selectedOrders: number;
    selectedStops: number;

  constructor(ridesService: RidesService, stopsService: StopsService, ordersService: OrdersService, private toastr: ToastrService,) {
    this.ridesService = ridesService;
    this.stopsService = stopsService;
    this.ordersService = ordersService;
  }

    ngAfterViewInit(): void {
    this.stopsService.getStops().subscribe(stops => {
        this.stops = stops;

        for (let stop of stops) {
            if (!stop.order) {
                this.morphedStops.push(stop);
            }
        }
    });

    this.ordersService.getOrders().subscribe(orders => {
        this.orders = orders;
    });

    this.ridesService.getRides().subscribe(rides => {
      let morphedRides : Ride[] = [];
      this.rides = rides;

      for (let ride of rides) {
        if (ride.Stops && ride.Stops.length > 0) {
          for (let stop of ride.Stops) {
            if (!stop.hasBeenVisited) {
              morphedRides.push(ride);
            }
          }
        } else {
          morphedRides.push(ride);
        }
      }
        this.morphedRides = morphedRides;
    });
    }

    linkRide() {
    console.log(this.selectedStops);
    }

    onSubmit() {
      this.ridesService.linkRide(this.selectedRide, this.selectedStops, this.selectedOrders).subscribe(
          data => {
              this.showSuccess();
          },
          error => (this.showError()),
      );
    }

    showSuccess() {
        this.toastr.success('Updated/created', 'Success');
    }
    showError() {
        this.toastr.success('Something went wrong', 'Error');
    }


}
