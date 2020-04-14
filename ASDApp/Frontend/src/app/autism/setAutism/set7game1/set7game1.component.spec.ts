import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set7game1Component } from './set7game1.component';

describe('Set7game1Component', () => {
  let component: Set7game1Component;
  let fixture: ComponentFixture<Set7game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set7game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set7game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
