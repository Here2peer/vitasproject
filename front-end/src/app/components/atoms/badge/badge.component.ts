import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent {

  @Input()
  colour: string = "bg-teal-400"

  twClasses = "rounded-full text-white badge text-xs p-1.5"

  @Input()
  extraClasses: string;

  @Input()
  twOverrideClasses: string;

  @Input()
  text: string;

  constructor() {
    if(this.twOverrideClasses) {
      this.twClasses = this.twOverrideClasses;
    }
  }

}
