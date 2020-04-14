import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3game1Component } from './set3game1.component';

describe('Set3game1Component', () => {
  let component: Set3game1Component;
  let fixture: ComponentFixture<Set3game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
