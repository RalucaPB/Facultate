import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5game3Component } from './set5game3.component';

describe('Set5game3Component', () => {
  let component: Set5game3Component;
  let fixture: ComponentFixture<Set5game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set5game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set5game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
