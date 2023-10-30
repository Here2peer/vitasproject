import {AfterViewInit, Component} from '@angular/core';
import {StopsService} from "../../../services/stops/stops.service";
import {RidesService} from "../../../services/rides/rides.service";
import {OrdersService} from "../../../services/orders/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Stop} from "../../../models/stop";
import {Ride} from "../../../models/ride";

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.less']
})
export class RideDetailsComponent implements AfterViewInit{

  object: Ride
  originalObject: Ride

  id: string
  rideService: RidesService
  constructor( rideService: RidesService, private route: ActivatedRoute, private toastr: ToastrService, private rt: Router) {

    this.rideService = rideService;
  }

  ngAfterViewInit(): void {
    const id: number = + this.route.snapshot.paramMap.get('ride_id');
    if (!isNaN(id)) {

      this.rideService.getRide(id).subscribe(object => {
        this.object = object;
        this.originalObject = object;
      });
    } else {
      this.object = new Ride();
      this.originalObject = new Ride();
    }
  }

  onDelete() {
    this.rideService.deleteRide(this.object.id).subscribe();
    //this.rt.navigate(['/stops']);
  }
  onSubmit() {
    if (this.object instanceof Ride) {
      if (this.object.id !== undefined) {
        this.rideService.updateRide(this.object).subscribe(
            data => {
              this.showSuccess();
            },
            error => (this.showError()),
        );
      } else {
        this.rideService.createRide(this.object).subscribe(
            data => {
              this.showSuccess();
            },
            error => (this.showError()),
        );
      }
    }
  }

  showSuccess() {
    this.toastr.success('Updated/created', 'Success');
  }
  showError() {
    this.toastr.success('Something went wrong', 'Error');
  }

}
