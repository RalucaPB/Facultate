import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd6game1Component } from './set-sd6game1.component';

describe('SetSd6game1Component', () => {
  let component: SetSd6game1Component;
  let fixture: ComponentFixture<SetSd6game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd6game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd6game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
