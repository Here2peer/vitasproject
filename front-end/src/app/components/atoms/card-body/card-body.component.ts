import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.less']
})
export class CardBodyComponent {


  twClasses: string = "card-body flex flex-col";

}
