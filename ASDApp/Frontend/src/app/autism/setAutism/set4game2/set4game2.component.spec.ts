import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4game2Component } from './set4game2.component';

describe('Set4game2Component', () => {
  let component: Set4game2Component;
  let fixture: ComponentFixture<Set4game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set4game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
