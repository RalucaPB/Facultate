import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3game5Component } from './set3game5.component';

describe('Set3game5Component', () => {
  let component: Set3game5Component;
  let fixture: ComponentFixture<Set3game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
