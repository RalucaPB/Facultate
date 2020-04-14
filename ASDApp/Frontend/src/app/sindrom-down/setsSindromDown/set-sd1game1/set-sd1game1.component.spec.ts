import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSD1game1Component } from './set-sd1game1.component';

describe('SetSD1game1Component', () => {
  let component: SetSD1game1Component;
  let fixture: ComponentFixture<SetSD1game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSD1game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSD1game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
