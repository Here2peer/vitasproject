import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filterable-table',
  templateUrl: './filterable-table.component.html',
  styleUrls: ['./filterable-table.component.less']
})
export class FilterableTableComponent {

  @Input()
  dataSource: any;

  @Input()
  displayedColumns: string[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
