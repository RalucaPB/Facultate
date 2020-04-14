import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5game4Component } from './set5game4.component';

describe('Set5game4Component', () => {
  let component: Set5game4Component;
  let fixture: ComponentFixture<Set5game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set5game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set5game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
