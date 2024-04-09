import { Component, computed, signal } from '@angular/core';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggleModule],
  styleUrl: './signals.component.css',
  template: `
    <mat-slide-toggle (change)="onAChange($event)">A</mat-slide-toggle>
    <mat-slide-toggle (change)="onBChange($event)">B</mat-slide-toggle>
    <button mat-button color="primary" [disabled]="disabled()">
      Signals Button!
    </button>
  `,
})
export class SignalsComponent {
  private a = signal(false);
  private b = signal(false);

  // Declaration and definition of disabled are located in the same place
  disabled = computed(
    // Here, we are reacting to a and b
    () => !((this.a() && !this.b()) || (!this.a() && this.b())),
  );

  // It would be nice to use model imputs instead, but I don't think
  // angular/material supports them yet
  onAChange($event: MatSlideToggleChange) {
    this.a.set($event.checked);
  }
  onBChange($event: MatSlideToggleChange) {
    this.b.set($event.checked);
  }
}
