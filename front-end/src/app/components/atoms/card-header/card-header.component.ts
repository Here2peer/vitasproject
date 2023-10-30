import {AfterViewInit, Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent implements AfterViewInit {

  @Input()
  cardTitle: string;

  @Input()
  returnButton: boolean;

  @Input()
  overrideLink: string;


    constructor() {
    }

    ngAfterViewInit(): void {
      if (this.overrideLink === undefined) {
        this.overrideLink = '..';
      }
    }

}
