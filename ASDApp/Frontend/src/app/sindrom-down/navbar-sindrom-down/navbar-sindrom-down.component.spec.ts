import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSindromDownComponent } from './navbar-sindrom-down.component';

describe('NavbarSindromDownComponent', () => {
  let component: NavbarSindromDownComponent;
  let fixture: ComponentFixture<NavbarSindromDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSindromDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSindromDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
