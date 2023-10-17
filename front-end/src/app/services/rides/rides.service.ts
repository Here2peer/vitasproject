import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Ride} from "../../models/ride";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
export class RidesService {


  constructor(private httpService: HttpClient) {}

  public getRides() {
    return this.httpService.get<Ride[]>( 'http://localhost:8080/api/v1/rides').pipe(
      map(data => data.map(data => new Ride().deserialize(data)))
    );
  }

  public getRide(id: number) {
    return this.httpService.get<Ride>( 'http://localhost:8080/api/v1/ride/' + id).pipe(
      map(data => new Ride().deserialize(data))
    );
  }
}
