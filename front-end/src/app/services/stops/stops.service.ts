import {Injectable, NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import {Stop} from "../../models/stop";
import {map} from "rxjs";
import {StopDTO} from "../../models/stop-dto";

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpClientModule,
  ],
})

export class StopsService {
  constructor(private httpService: HttpClient) {}

  public getStop(id: number) {
    return this.httpService.get<Stop>( 'http://localhost:8080/api/v1/stop/' + id).pipe(
      map(data => new Stop().deserialize(data))
    );
  }

  public getStops() {
    return this.httpService.get<Stop[]>( 'http://localhost:8080/api/v1/stops').pipe(
      map(data => data.map(data => new Stop().deserialize(data)))
    );
  }

  public getStopsAmount()  {
    return this.httpService.get<number>( 'http://localhost:8080/api/v1/stops/amount').pipe(
        map(data => data)
    );
  }

  public deleteStop(id: number) {
    return this.httpService.delete<Stop>( 'http://localhost:8080/api/v1/stop/' + id).pipe(
      map(data => new Stop().deserialize(data))
    );
  }

    public createStop(stop: Stop) {
    const stopDTO = new StopDTO(
        stop.id,
        stop.stopNumber,
        stop.postcode,
        stop.houseNumber,
        stop.hasBeenVisited
    );
    return this.httpService.post<StopDTO>( 'http://localhost:8080/api/v1/stop', stopDTO);
    }

  public updateStop(stop: Stop) {
    const stopDTO = new StopDTO(
        stop.id,
        stop.stopNumber,
        stop.postcode,
        stop.houseNumber,
        stop.hasBeenVisited
    );
    return this.httpService.put<StopDTO>( 'http://localhost:8080/api/v1/stop/' + stop.id, stopDTO);
  }

}
