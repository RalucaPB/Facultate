import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd8game2Component } from './set-sd8game2.component';

describe('SetSd8game2Component', () => {
  let component: SetSd8game2Component;
  let fixture: ComponentFixture<SetSd8game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd8game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd8game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
