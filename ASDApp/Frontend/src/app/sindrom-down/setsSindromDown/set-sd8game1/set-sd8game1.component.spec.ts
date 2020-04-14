import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd8game1Component } from './set-sd8game1.component';

describe('SetSd8game1Component', () => {
  let component: SetSd8game1Component;
  let fixture: ComponentFixture<SetSd8game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd8game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd8game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
