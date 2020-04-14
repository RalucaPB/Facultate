import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4game4Component } from './set4game4.component';

describe('Set4game4Component', () => {
  let component: Set4game4Component;
  let fixture: ComponentFixture<Set4game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set4game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
