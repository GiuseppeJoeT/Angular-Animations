import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'anim-card',
  animations: [
    trigger('collapsable', [
      state('opened', style({
        height:'*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.77, 0, 0.175, 1)')
      ])
    ])
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string;
  state = 'closed';
  // opened = false;

  toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
    // this.opened = !this.opened; // true
  }

}
