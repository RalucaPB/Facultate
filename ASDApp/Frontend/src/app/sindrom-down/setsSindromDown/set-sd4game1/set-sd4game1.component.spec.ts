import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSD4game1Component } from './set-sd4game1.component';

describe('SetSD4game1Component', () => {
  let component: SetSD4game1Component;
  let fixture: ComponentFixture<SetSD4game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSD4game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSD4game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
