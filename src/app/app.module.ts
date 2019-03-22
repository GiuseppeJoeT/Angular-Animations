import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AnimatedButtonComponent,
    AnimatedTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
