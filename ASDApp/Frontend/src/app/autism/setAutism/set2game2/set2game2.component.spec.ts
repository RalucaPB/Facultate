import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2game2Component } from './set2game2.component';

describe('Set2game2Component', () => {
  let component: Set2game2Component;
  let fixture: ComponentFixture<Set2game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
