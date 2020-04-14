import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set7game2Component } from './set7game2.component';

describe('Set7game2Component', () => {
  let component: Set7game2Component;
  let fixture: ComponentFixture<Set7game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set7game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set7game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
