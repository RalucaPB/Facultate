import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd2game2Component } from './set-sd2game2.component';

describe('SetSd2game2Component', () => {
  let component: SetSd2game2Component;
  let fixture: ComponentFixture<SetSd2game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd2game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd2game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
