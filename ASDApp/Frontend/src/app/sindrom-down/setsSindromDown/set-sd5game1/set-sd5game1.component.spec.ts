import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSD5game1Component } from './set-sd5game1.component';

describe('SetSD5game1Component', () => {
  let component: SetSD5game1Component;
  let fixture: ComponentFixture<SetSD5game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSD5game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSD5game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
