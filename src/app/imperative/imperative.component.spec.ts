import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeComponent } from './imperative.component';

describe('TestComponent', () => {
  let component: ImperativeComponent;
  let fixture: ComponentFixture<ImperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImperativeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changing A to true should change disabled ', () => {
    expect(component.disabled).toBeTrue();
    component.onAChange({ checked: true, source: {} as any });
    expect(component.disabled).toBeFalse();
  });
});
