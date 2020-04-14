import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set6game1Component } from './set6game1.component';

describe('Set6game1Component', () => {
  let component: Set6game1Component;
  let fixture: ComponentFixture<Set6game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set6game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set6game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
