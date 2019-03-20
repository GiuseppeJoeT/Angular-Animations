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
  }
