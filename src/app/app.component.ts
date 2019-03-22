import { Component } from '@angular/core';

@Component({
  selector: 'anim-root',
  templateUrl: './app.component.html',
  // template:`<h1 style="color:red">test html color in ts file</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ng-Animations';

  template_tags = 'testo di tipo stringa dinamico.';

  active = 'one';

  // DATA-DRIVEN Buttons
  sections = [
    { id: 1, label: 'FIRST', text: 'Callbacks can serve as a debugging tool, for example in conjunction with console.warn() to view the application\'s progress in a browser\'s Developer JavaScript Console. The following code snippet creates console log output for our original example, a button with the two states of open and closed.'},
    { id: 2, label: 'SECOND', text: 'In the previous section, we saw a simple two-state transition. Now we\'ll create an animation with multiple steps run in sequence using keyframes.'},
    { id: 3, label: 'THIRD', text: 'bla bla 3' },
  ];

  bottoneAttivo = this.sections[0];

  }

