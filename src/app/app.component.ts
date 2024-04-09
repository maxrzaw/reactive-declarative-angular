import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImperativeComponent } from './imperative/imperative.component';
import { SignalsComponent } from './signals/signals.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ImperativeComponent,
    SignalsComponent,
    RxjsComponent,
  ],
  styleUrl: './app.component.css',
  template: `
    <h1>Small Reactive Declarative Demo!</h1>
    <app-imperative></app-imperative>
    <app-rxjs></app-rxjs>
    <app-signals></app-signals>
  `,
})
export class AppComponent {
  title = 'reactive-declarative-angular';
}
