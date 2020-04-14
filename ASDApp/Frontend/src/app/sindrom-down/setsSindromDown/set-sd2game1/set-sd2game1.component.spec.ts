import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSD2game1Component } from './set-sd2game1.component';

describe('SetSD2game1Component', () => {
  let component: SetSD2game1Component;
  let fixture: ComponentFixture<SetSD2game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSD2game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSD2game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
