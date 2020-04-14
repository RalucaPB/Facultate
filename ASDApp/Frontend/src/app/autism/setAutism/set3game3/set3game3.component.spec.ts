import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3game3Component } from './set3game3.component';

describe('Set3game3Component', () => {
  let component: Set3game3Component;
  let fixture: ComponentFixture<Set3game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
