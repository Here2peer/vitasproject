import { Component } from '@angular/core';
import {Order} from "../../../models/order";
import {OrdersService} from "../../../services/orders/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent {

  public orders: Order[] = [];

  orderTableHeaders: string[] = ['Id', 'Order number', 'Description', 'Stops'];

  constructor(private orderService: OrdersService) {
    this.getOrders();
  }

  public getOrders() {
    this.orders = [];
    this.orderService.getOrders().subscribe(orders => {
      if (orders.length > 0) {
        this.orders = orders;
      }
    });
  }
}
