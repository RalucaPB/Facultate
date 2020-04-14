import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5game2Component } from './set5game2.component';

describe('Set5game2Component', () => {
  let component: Set5game2Component;
  let fixture: ComponentFixture<Set5game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set5game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set5game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
