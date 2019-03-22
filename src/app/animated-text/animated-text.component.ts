import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'anim-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.css']
})
export class AnimatedTextComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
