import {AfterViewInit, Component} from '@angular/core';
import {Ride} from "../../../models/ride";
import {RidesService} from "../../../services/rides/rides.service";

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.less']
})
export class RidesComponent implements AfterViewInit {

  rideDisplayedColumns: string[] = [];

  rideTableHeaders: string[] = ['Id', 'Ride number', 'Date', 'Description', 'Stops', 'Finished'];

  public rideId: number;

  public rides: Ride[] = [];
  constructor(private ridesService: RidesService) {
    this.getRides();
  }

  ngAfterViewInit(): void {
    //this.getRides();
  }

  public getRides() {
    this.rides = [];
    this.ridesService.getRides().subscribe(rides => {
      if (rides.length > 0) {
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

}
