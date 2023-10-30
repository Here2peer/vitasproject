import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Ride} from "../../../models/ride";
import {MorphedRide} from "../../../models/morphed-ride";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-ride-info',
  templateUrl: './ride-info.component.html',
  styleUrls: ['./ride-info.component.less']
})
export class RideInfoComponent implements OnChanges {

  regEx = new RegExp('_[A-Za-z]+');

  objectKeys: string[];

  @Input()
  rides: Ride[];

  morphedRides: MorphedRide[];

  dataSource: MatTableDataSource<MorphedRide>;

  @Input()
  tableHeaders: string[] = ['Ride number', 'Description', 'Amount of stops', 'Orders']

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.morphedRides = [];
    if (changes['rides'] && this.rides.length !== 0) {
      for (let ride of this.rides) {
        if (ride['stops'].length !== 0) {
          let morphedRide = new MorphedRide();
            morphedRide.rideNumber = ride['_rideNumber'];
            morphedRide.description = ride['_description'];
            morphedRide.Stops = ride['stops'];
            morphedRide.finished = ride['_finished'];

          this.morphedRides.push(morphedRide);
        }
      }
      this.dataSource = new MatTableDataSource(this.morphedRides);
    }
  }


}
