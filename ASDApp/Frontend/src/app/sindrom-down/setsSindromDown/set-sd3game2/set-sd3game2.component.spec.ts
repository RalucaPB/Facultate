import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd3game2Component } from './set-sd3game2.component';

describe('SetSd3game2Component', () => {
  let component: SetSd3game2Component;
  let fixture: ComponentFixture<SetSd3game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd3game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd3game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
