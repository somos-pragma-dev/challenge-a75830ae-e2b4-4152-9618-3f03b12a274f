import { Component } from '@angular/core';
import { Signal, signal } from '@angular/core';

@Component({
  selector: 'app-standalone-component',
  template: `<p>Componente standalone con señales</p>`
})
export class StandaloneComponent {
  signalValue: Signal<number>;

  constructor() {
    this.signalValue = signal(0);
  }

  increment() {
    this.signalValue.update(value => value + 1);
  }
}