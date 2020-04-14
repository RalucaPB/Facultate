import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSD3game1Component } from './set-sd3game1.component';

describe('SetSD3game1Component', () => {
  let component: SetSD3game1Component;
  let fixture: ComponentFixture<SetSD3game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSD3game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSD3game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
