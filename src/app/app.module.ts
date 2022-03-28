import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { InputElementComponent } from './input-element/input-element.component';

@NgModule({
  declarations: [
    InputElementComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    InputElementComponent
  ]
})
export class AppModule {
  
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(InputElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('input-element', el);
  }
 }
