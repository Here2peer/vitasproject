import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RidesComponent} from "./components/pages/rides/rides.component";
import {AppComponent} from "./app.component";
import {IndexComponent} from "./components/pages/index/index.component";
import {StopsComponent} from "./components/pages/stops/stops.component";
import {OrdersComponent} from "./components/pages/orders/orders.component";
import {StagingComponent} from "./components/staging/staging.component";
import {StopDetailsComponent} from "./components/pages/stop-details/stop-details.component";
import {RideDetailsComponent} from "./components/pages/ride-details/ride-details.component";
import {OrderDetailsComponent} from "./components/pages/order-details/order-details.component";
import {OngoingRideComponent} from "./components/pages/ongoing-ride/ongoing-ride.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'rides', component: RidesComponent },
    { path: 'stops', component: StopsComponent},
    { path: 'stops/:stop_id', component: StopDetailsComponent },
    { path: 'stops/create', component: StopDetailsComponent },
    { path: 'rides/:ride_id', component: RideDetailsComponent },
    { path: 'rides/create', component: RideDetailsComponent },
    { path: 'orders/:ride_id', component: OrderDetailsComponent },
    { path: 'orders/create', component: OrderDetailsComponent },
    {path: 'ongoing/create', component: OngoingRideComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'staging', component: StagingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
