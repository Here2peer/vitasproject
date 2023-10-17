import {Injectable, NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import {Stop} from "../../models/stop";
import {map} from "rxjs";

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

}
