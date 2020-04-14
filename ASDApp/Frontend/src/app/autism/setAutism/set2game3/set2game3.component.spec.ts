import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2game3Component } from './set2game3.component';

describe('Set2game3Component', () => {
  let component: Set2game3Component;
  let fixture: ComponentFixture<Set2game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
