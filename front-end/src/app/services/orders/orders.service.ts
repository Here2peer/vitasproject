import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../../models/order";
import {map} from "rxjs";

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
}
