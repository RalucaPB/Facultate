import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2game5Component } from './set2game5.component';

describe('Set2game5Component', () => {
  let component: Set2game5Component;
  let fixture: ComponentFixture<Set2game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
