import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4game3Component } from './set4game3.component';

describe('Set4game3Component', () => {
  let component: Set4game3Component;
  let fixture: ComponentFixture<Set4game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set4game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
