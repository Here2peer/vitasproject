import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})

export class LinkComponent {
  twClasses: string = "transition-all duration-500 ease-in-out hover:text-gray-900";
  @Input()
  extraClasses: string;
  @Input()
  title: string;
  @Input()
  link: any;
  @Input()
  text: string;
  @Input()
  fontAwesomeIcon: string;

  constructor() {
  }
}
