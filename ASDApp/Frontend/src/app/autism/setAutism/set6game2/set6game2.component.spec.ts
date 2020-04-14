import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set6game2Component } from './set6game2.component';

describe('Set6game2Component', () => {
  let component: Set6game2Component;
  let fixture: ComponentFixture<Set6game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set6game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set6game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
