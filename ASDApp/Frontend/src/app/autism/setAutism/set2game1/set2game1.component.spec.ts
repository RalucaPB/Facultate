import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2game1Component } from './set2game1.component';

describe('Set2game1Component', () => {
  let component: Set2game1Component;
  let fixture: ComponentFixture<Set2game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
