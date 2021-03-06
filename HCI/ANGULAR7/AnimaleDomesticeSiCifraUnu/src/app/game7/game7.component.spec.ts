import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game7Component } from './game7.component';

describe('Game7Component', () => {
  let component: Game7Component;
  let fixture: ComponentFixture<Game7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
