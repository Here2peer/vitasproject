import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../../models/order";
import {map} from "rxjs";
import {OrderDto} from "../../models/order-dto";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpService: HttpClient) {}

  public getOrders() {
    return this.httpService.get<Order[]>( 'http://localhost:8080/api/v1/orders').pipe(
      map(data => data.map(data => new Order().deserialize(data)))
    );
  }

  public getOrder(id: number) {
    return this.httpService.get<Order>( 'http://localhost:8080/api/v1/order/' + id).pipe(
      map(data => new Order().deserialize(data))
    );
  }

    public getOrdersAmount()  {
    return this.httpService.get<number>( 'http://localhost:8080/api/v1/orders/amount').pipe(
        map(data => data)
    );
    }

    public deleteOrder(id: number) {
    return this.httpService.delete<Order>( 'http://localhost:8080/api/v1/order/' + id).pipe(
      map(data => new Order().deserialize(data))
    );
    }

    public createOrder(order: Order) {
    const orderDTO = new OrderDto(
        order.id,
        order.orderNumber,
        order.description,
    );
    return this.httpService.post<OrderDto>( 'http://localhost:8080/api/v1/order', orderDTO);
    }

    public updateOrder(order: Order) {
    const orderDTO = new OrderDto(
        order.id,
        order.orderNumber,
        order.description,
    );
    return this.httpService.put<OrderDto>( 'http://localhost:8080/api/v1/order/' + order.id, orderDTO);
    }
}
