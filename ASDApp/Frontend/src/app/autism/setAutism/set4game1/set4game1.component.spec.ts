import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4game1Component } from './set4game1.component';

describe('Set4game1Component', () => {
  let component: Set4game1Component;
  let fixture: ComponentFixture<Set4game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set4game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
