import { Component } from '@angular/core';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imperative',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, FormsModule],
  styleUrl: './imperative.component.css',
  template: `
    <mat-slide-toggle (change)="onAChange($event)">A</mat-slide-toggle>
    <mat-slide-toggle (change)="onBChange($event)">B</mat-slide-toggle>
    <button color="primary" [disabled]="disabled" mat-button>
      Imperative Button!
    </button>
  `,
})
export class ImperativeComponent {
  private a = false;
  private b = false;

  // Just the declaration of disabled. Does not contain the definition.
  disabled = true;

  onAChange($event: MatSlideToggleChange) {
    this.a = $event.checked;
    // special stuff for a changing

    // We are responsible for telling the component to update disabled, we are
    // bad at programming and might forget to do this
    // This is the imperative part of this
    this.disabled = !((this.a && !this.b) || (!this.a && this.b));
  }

  onBChange($event: MatSlideToggleChange) {
    this.b = $event.checked;
    // special stuff for b changing
    // This is the imperative part of this
    this.disabled = !((this.a && !this.b) || (!this.a && this.b));
  }

  // I intentionally implemented the calculation of disabled in each of the
  // onChange methods. This was to exaggerate the points I am making.
}
