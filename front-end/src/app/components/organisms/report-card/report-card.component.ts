import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.less']
})
export class ReportCardComponent {

  @Input()
  description: string;

  @Input()
  objectCount: number = 0;

  @Input()
  icon: string;

}
