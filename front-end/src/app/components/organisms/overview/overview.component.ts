import {Component, Input} from '@angular/core';
import {Ride} from "../../../models/ride";
import {Order} from "../../../models/order";
import {Stop} from "../../../models/stop";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent {

  @Input()
  object: Ride[] | Stop[] | Order[];

  @Input()
  tableHeaders: string[];

  @Input()
  title: string;



}
