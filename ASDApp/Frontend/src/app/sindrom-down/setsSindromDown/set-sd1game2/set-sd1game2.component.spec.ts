import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd1game2Component } from './set-sd1game2.component';

describe('SetSd1game2Component', () => {
  let component: SetSd1game2Component;
  let fixture: ComponentFixture<SetSd1game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd1game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd1game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
