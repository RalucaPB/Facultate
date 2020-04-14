import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAutismComponent } from './navbar-autism.component';

describe('NavbarAutismComponent', () => {
  let component: NavbarAutismComponent;
  let fixture: ComponentFixture<NavbarAutismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAutismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
