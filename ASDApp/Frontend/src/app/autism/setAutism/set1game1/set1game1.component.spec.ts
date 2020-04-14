import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set1game1Component } from './set1game1.component';

describe('Set1game1Component', () => {
  let component: Set1game1Component;
  let fixture: ComponentFixture<Set1game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set1game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set1game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
