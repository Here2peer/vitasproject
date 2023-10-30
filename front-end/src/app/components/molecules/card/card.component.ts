import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input()
  cardTitle: string;

  @Input()
  cardType: 'Classic' | 'Report' | 'ReturnClassic' = 'Classic';

  twClasses: string

  returnButton: boolean = false;

  constructor() {
    if(this.cardType == 'Classic' || this.cardType == 'ReturnClassic') {
      this.twClasses = 'card mt-6';
      this.returnButton = true;
    } else if (this.cardType == 'Report') {
      this.twClasses = 'report-card';
    }
  }


}
