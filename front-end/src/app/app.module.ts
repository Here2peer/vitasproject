import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopsComponent } from './components/pages/stops/stops.component';
import { RidesComponent } from './components/pages/rides/rides.component';
import { OrdersComponent } from './components/pages/orders/orders.component';

import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TableComponent } from './components/organisms/table/table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { IndexComponent } from './components/pages/index/index.component';
import { NavitemsComponent } from './components/molecules/navitems/navitems.component';
import { CompanyHeaderComponent } from './components/molecules/company-header/company-header.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { WrapperComponent } from './components/atoms/wrapper/wrapper.component';
import { ContentComponent } from './components/atoms/content/content.component';
import { CardComponent } from './components/molecules/card/card.component';
import { CardHeaderComponent } from './components/atoms/card-header/card-header.component';
import { CardBodyComponent } from './components/atoms/card-body/card-body.component';
import { OverviewComponent } from './components/organisms/overview/overview.component';
import { StagingComponent } from './components/staging/staging.component';
import { BadgeComponent } from './components/atoms/badge/badge.component';
import { ReportCardComponent } from './components/organisms/report-card/report-card.component';
import { RideInfoComponent } from './components/organisms/ride-info/ride-info.component';
import { TableHeaderComponent } from './components/atoms/table-header/table-header.component';
import { FilterableTableComponent } from './components/molecules/filterable-table/filterable-table.component';
import { FormComponent } from './components/organisms/form/form.component';
import { StopDetailsComponent } from './components/pages/stop-details/stop-details.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ToastrModule } from 'ngx-toastr';
import { RideDetailsComponent } from './components/pages/ride-details/ride-details.component';
import { OrderDetailsComponent } from './components/pages/order-details/order-details.component';
import { OngoingRideComponent } from './components/pages/ongoing-ride/ongoing-ride.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    RidesComponent,
    OrdersComponent,
    TableComponent,
    NavbarComponent,
    LinkComponent,
    IndexComponent,
    NavitemsComponent,
    CompanyHeaderComponent,
    SidebarComponent,
    WrapperComponent,
    ContentComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    OverviewComponent,
    StagingComponent,
    BadgeComponent,
    ReportCardComponent,
    RideInfoComponent,
    TableHeaderComponent,
    FilterableTableComponent,
    FormComponent,
    StopDetailsComponent,
    RideDetailsComponent,
    OrderDetailsComponent,
    OngoingRideComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatRadioModule,
        MatCheckboxModule,
        ToastrModule.forRoot(),
        MatSelectModule,
        MatListModule
    ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
