import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5game5Component } from './set5game5.component';

describe('Set5game5Component', () => {
  let component: Set5game5Component;
  let fixture: ComponentFixture<Set5game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set5game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set5game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
