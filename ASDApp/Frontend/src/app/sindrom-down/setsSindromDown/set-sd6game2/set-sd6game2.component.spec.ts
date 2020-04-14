import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd6game2Component } from './set-sd6game2.component';

describe('SetSd6game2Component', () => {
  let component: SetSd6game2Component;
  let fixture: ComponentFixture<SetSd6game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd6game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd6game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
