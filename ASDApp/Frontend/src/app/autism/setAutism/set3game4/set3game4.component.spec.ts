import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3game4Component } from './set3game4.component';

describe('Set3game4Component', () => {
  let component: Set3game4Component;
  let fixture: ComponentFixture<Set3game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
