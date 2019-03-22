import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import {animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'anim-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('over', style({
        borderColor: 'white',
        backgroundColor: 'red',
        // scale(1.3) -> +30%
        transform: 'scale(1.3) rotate(20deg)'
      })),
      state('out', style({
        backgroundColor: 'orange',
        transform: 'scale(1) rotate(0deg)'
      })),
      state('selected', style({
        backgroundColor: 'lightBlue',
        borderColor: 'darkBlue',
        transform: 'scale(1.5) rotate(-10deg)'
      })),
      transition('out <=> over', [
        // Duration and delay are expressed as a number and optional time unit, such as "1s" or "10ms"
        animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')
      ]),
      transition('* <=> selected', [
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)')
      ])
    ])
  ],
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges  {
  // OnChanges is a lifecycle hook that is called when any data-bound property of a directive changes.

  // proprietà in Input, esterna (valore deriva dall'html)
  @Input() selected = false;
  // selected impostata su [disabled] per abilitarlo al CLICK

  // proprietà interna
  state = 'out';

  // ngOnChanges verrà invocato ogni volta che la proprietà in Input cambia
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);

    // se proprietà selected è cambiata
    if (changes.selected) {
      // aggiorniamo lo state
      this.state = changes.selected.currentValue ? 'selected' : 'out';
    }
  }
}
