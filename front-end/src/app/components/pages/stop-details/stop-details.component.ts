import {AfterViewInit, Component, OnChanges} from '@angular/core';
import {StopsService} from "../../../services/stops/stops.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Stop} from "../../../models/stop";
import { ToastrService } from 'ngx-toastr';
import {Ride} from "../../../models/ride";
import {Order} from "../../../models/order";
import {RidesService} from "../../../services/rides/rides.service";
import {OrdersService} from "../../../services/orders/orders.service";

@Component({
  selector: 'app-stop-details',
  templateUrl: './stop-details.component.html',
  styleUrls: ['./stop-details.component.less']
})
export class StopDetailsComponent implements AfterViewInit {
  submitted = false;

  object: Stop
  originalObject: Stop

  id: string

  stopService: StopsService
  constructor(stopService: StopsService, private route: ActivatedRoute, private toastr: ToastrService, private rt: Router) {
    this.stopService = stopService;
  }

    ngAfterViewInit(): void {
      const id: number = + this.route.snapshot.paramMap.get('stop_id');
      if (!isNaN(id)) {

        this.stopService.getStop(id).subscribe(object => {
          this.object = object;
          this.originalObject = object;
        });
      } else {
        this.object = new Stop();
        this.originalObject = new Stop();
      }
    }

    onDelete() {
        this.stopService.deleteStop(this.object.id).subscribe();
        //this.rt.navigate(['/stops']);
    }
  onSubmit() {
    if (this.object instanceof Stop) {
      if (this.object.id !== undefined) {
        this.stopService.updateStop(this.object).subscribe(
            data => {
              this.showSuccess();
            },
            error => (this.showError()),
        );
      } else {
        this.stopService.createStop(this.object).subscribe(
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
