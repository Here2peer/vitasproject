import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent {

  @Input()
  cardTitle: string;

  @Input()
  returnButton: boolean;

}
