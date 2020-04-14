import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2game4Component } from './set2game4.component';

describe('Set2game4Component', () => {
  let component: Set2game4Component;
  let fixture: ComponentFixture<Set2game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
