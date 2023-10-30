import { Component } from '@angular/core';
import {Stop} from "../../../models/stop";
import {RidesService} from "../../../services/rides/rides.service";
import {StopsService} from "../../../services/stops/stops.service";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.less']
})
export class StopsComponent {

  public stops: Stop[]= [];

  stopTableHeaders: string[] = ['Id', 'Stop number', 'Postcode', 'House number', 'Has been visited', 'Ride', 'Order'];

  constructor(private stopsService: StopsService) {
    this.getStops();
  }

  public getStops() {
    this.stops = [];
    this.stopsService.getStops().subscribe(stops => {
      if (stops.length > 0) {
        this.stops = stops;
      }
    });
  }

}
