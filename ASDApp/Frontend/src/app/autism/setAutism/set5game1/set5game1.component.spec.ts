import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5game1Component } from './set5game1.component';

describe('Set5game1Component', () => {
  let component: Set5game1Component;
  let fixture: ComponentFixture<Set5game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set5game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set5game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
