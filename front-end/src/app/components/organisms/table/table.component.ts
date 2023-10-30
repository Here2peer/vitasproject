import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Order} from "../../../models/order";
import {Stop} from "../../../models/stop";
import {Ride} from "../../../models/ride";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnChanges{

  @Input() tableHeaders: string[];
  @Input() objectArray: any[];
  @Input() fullTable: boolean = true;
  @Input() badges: boolean = false;
  @Input() displayedColumns: string[];

  constructor() {
  }

  ngOnChanges(changes:SimpleChanges): void {
    if (changes['objectArray'] && this.objectArray.length !== 0) {
      this.displayedColumns = this.calcDisplayedColumns(this.objectArray);
    }
  }
  public calcDisplayedColumns(object: Ride[] | Stop[] | Order[]): string[] {
    if (this.fullTable) {
      return Object.keys(object[0])
    } else if (!this.fullTable) {
      return this.displayedColumns;
    }
    return [];
  }

  unsorted(): number {
    return 0;
  }
}
