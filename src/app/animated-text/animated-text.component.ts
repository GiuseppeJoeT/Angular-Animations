import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'anim-animated-text',
  animations: [
    trigger('animatedText', [
      state('show', style({
        opacity: 1,
        marginTop: 0
      })),
      state('hide', style({
        opacity: 0,
        marginTop: '50px'
      })),
      transition('show <=> hide', [
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)')
      ])
    ])
  ],
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.css']
})
export class AnimatedTextComponent implements OnChanges {
  // proprietà esterna importata:
  // <anim-animated-text [text] = bottoneAttivo.text ></anim-animated-text>
  @Input() text: string;

  // distruggere testo attuale e mostrare il successivo
  textToShow: string;

  // proprietà interna
  state = 'show';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text.isFirstChange()) {
      this.textToShow = changes.text.currentValue;
    } else {
      this.state = 'hide';
    }
  }

  showNext(event: AnimationEvent) {
    // console.log(event);
    if (event.toState === 'hide') {
      this.state = 'show';
      this.textToShow = this.text;
    }
  }
}
