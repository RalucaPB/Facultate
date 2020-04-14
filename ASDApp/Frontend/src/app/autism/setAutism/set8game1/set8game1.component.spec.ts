import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set8game1Component } from './set8game1.component';

describe('Set8game1Component', () => {
  let component: Set8game1Component;
  let fixture: ComponentFixture<Set8game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set8game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set8game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
