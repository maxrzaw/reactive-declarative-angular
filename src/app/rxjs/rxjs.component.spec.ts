import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';

import { RxjsComponent } from './rxjs.component';
import { take } from 'rxjs';

describe('RxjsComponent', () => {
  let component: RxjsComponent;
  let fixture: ComponentFixture<RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changing A to true should change disabled ', fakeAsync(() => {
    component.disabled.pipe(take(1)).subscribe((value) => {
      expect(value).toBeTrue();
    });
    flush();

    component.onAChange({ checked: true, source: {} as any });

    component.disabled.pipe(take(1)).subscribe((value) => {
      expect(value).toBeFalse();
    });
  }));
});
