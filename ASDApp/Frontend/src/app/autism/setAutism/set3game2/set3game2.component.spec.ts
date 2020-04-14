import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3game2Component } from './set3game2.component';

describe('Set3game2Component', () => {
  let component: Set3game2Component;
  let fixture: ComponentFixture<Set3game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
