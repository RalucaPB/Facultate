import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set8game2Component } from './set8game2.component';

describe('Set8game2Component', () => {
  let component: Set8game2Component;
  let fixture: ComponentFixture<Set8game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set8game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set8game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
