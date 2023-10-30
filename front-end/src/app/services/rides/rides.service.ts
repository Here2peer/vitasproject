import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Ride} from "../../models/ride";
import {map} from "rxjs";
import {RideDto} from "../../models/ride-dto";

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

    public deleteRide(id: number) {
    return this.httpService.delete<Ride>( 'http://localhost:8080/api/v1/ride/' + id).pipe(
      map(data => new Ride().deserialize(data))
    );
    }

    public createRide(ride: Ride) {
    const rideDTO = new RideDto(
        ride.id,
        ride.rideNumber,
        ride.description,
    );

    return this.httpService.post<RideDto>( 'http://localhost:8080/api/v1/ride', rideDTO);
    }

    public updateRide(ride: Ride) {
    const rideDTO = new RideDto(
        ride.id,
        ride.rideNumber,
        ride.description,
    );
    return this.httpService.put<RideDto>( 'http://localhost:8080/api/v1/ride/' + ride.id, rideDTO);
    }

  public getRidesAmount()  {
    return this.httpService.get<number>( 'http://localhost:8080/api/v1/rides/amount').pipe(
        map(data => data)
    );
  }

  public linkRide(rideId: number, stopId: number, orderId) {
    this.httpService.put<RideDto>( 'http://localhost:8080/api/v1/ride/' + rideId + '/stop/' + stopId, null);
    return this.httpService.put('http://localhost:8080/api/v1/order/' + orderId + '/order/' + stopId, null);
  }

}
