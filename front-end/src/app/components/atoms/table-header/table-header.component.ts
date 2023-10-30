import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.less']
})
export class TableHeaderComponent {

  @Input()
  headerName: string;
  @Input()
  headerDefinition: string;
  @Input()
  objectData: any;

}
