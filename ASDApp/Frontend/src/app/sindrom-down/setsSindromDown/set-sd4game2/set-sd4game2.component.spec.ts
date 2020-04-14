import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd4game2Component } from './set-sd4game2.component';

describe('SetSd4game2Component', () => {
  let component: SetSd4game2Component;
  let fixture: ComponentFixture<SetSd4game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd4game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd4game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
