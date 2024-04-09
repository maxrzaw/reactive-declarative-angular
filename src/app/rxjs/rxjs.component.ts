import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggleModule, AsyncPipe],
  styleUrl: './rxjs.component.css',
  template: `
    <mat-slide-toggle (change)="onAChange($event)">A</mat-slide-toggle>
    <mat-slide-toggle (change)="onBChange($event)">B</mat-slide-toggle>
    <button mat-button color="primary" [disabled]="disabled | async">
      RxJS Button!
    </button>
  `,
})
export class RxjsComponent {
  private a = new BehaviorSubject<boolean>(false);
  private b = new BehaviorSubject<boolean>(false);

  // Declaration and definition of disabled are located in the same place
  disabled = combineLatest([this.a, this.b]).pipe(
    // Here, we are reacting to a and b
    map(([a, b]) => !((a && !b) || (!a && b))),
  );

  onAChange($event: MatSlideToggleChange) {
    this.a.next($event.checked);
  }
  onBChange($event: MatSlideToggleChange) {
    this.b.next($event.checked);
  }
}
