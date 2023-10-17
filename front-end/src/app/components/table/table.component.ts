import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnChanges{

  @Input() tableHeaders: string[];
  @Input() objectArray: any[];
  @Input() displayedColumns: string[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.displayedColumns)
    console.log(this.tableHeaders.includes('actions'))

  }

  unsorted(): number {
    return 0;
  }
}
