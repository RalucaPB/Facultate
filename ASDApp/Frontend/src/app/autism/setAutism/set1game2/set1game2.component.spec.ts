import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set1game2Component } from './set1game2.component';

describe('Set1game2Component', () => {
  let component: Set1game2Component;
  let fixture: ComponentFixture<Set1game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set1game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set1game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
