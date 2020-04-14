import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4game5Component } from './set4game5.component';

describe('Set4game5Component', () => {
  let component: Set4game5Component;
  let fixture: ComponentFixture<Set4game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set4game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
