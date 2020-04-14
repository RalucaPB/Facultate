import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd7game1Component } from './set-sd7game1.component';

describe('SetSd7game1Component', () => {
  let component: SetSd7game1Component;
  let fixture: ComponentFixture<SetSd7game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd7game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd7game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
