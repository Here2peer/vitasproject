import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopsComponent } from './components/stops/stops.component';
import { RidesComponent } from './components/rides/rides.component';
import { OrdersComponent } from './components/orders/orders.component';

import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TableComponent } from './components/table/table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    RidesComponent,
    OrdersComponent,
    TableComponent
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
    MatButtonModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
