import {AfterViewInit, Component} from '@angular/core';
import {Ride} from "../../../models/ride";
import {RidesService} from "../../../services/rides/rides.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Order} from "../../../models/order";
import {OrdersService} from "../../../services/orders/orders.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.less']
})
export class OrderDetailsComponent implements AfterViewInit{

  object: Order
  originalObject: Order

  id: string
  orderService: OrdersService
  constructor( orderService: OrdersService, private route: ActivatedRoute, private toastr: ToastrService, private rt: Router) {

        this.orderService = orderService;
  }

  ngAfterViewInit(): void {
    const id: number = + this.route.snapshot.paramMap.get('ride_id');
    if (!isNaN(id)) {

      this.orderService.getOrder(id).subscribe(object => {
        this.object = object;
        this.originalObject = object;
      });
    } else {
      this.object = new Order();
      this.originalObject = new Order();
    }
  }

  onDelete() {
    this.orderService.deleteOrder(this.object.id).subscribe();
    //this.rt.navigate(['/stops']);
  }
  onSubmit() {
    if (this.object instanceof Order) {
      if (this.object.id !== undefined) {
        this.orderService.updateOrder(this.object).subscribe(
            data => {
              this.showSuccess();
            },
            error => (this.showError()),
        );
      } else {
        this.orderService.createOrder(this.object).subscribe(
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
