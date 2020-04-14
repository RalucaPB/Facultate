import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd5game2Component } from './set-sd5game2.component';

describe('SetSd5game2Component', () => {
  let component: SetSd5game2Component;
  let fixture: ComponentFixture<SetSd5game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd5game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd5game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
