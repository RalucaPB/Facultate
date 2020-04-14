import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSd7game2Component } from './set-sd7game2.component';

describe('SetSd7game2Component', () => {
  let component: SetSd7game2Component;
  let fixture: ComponentFixture<SetSd7game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSd7game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSd7game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
