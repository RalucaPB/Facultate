import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutismComponent } from './home-autism.component';

describe('HomeAutismComponent', () => {
  let component: HomeAutismComponent;
  let fixture: ComponentFixture<HomeAutismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAutismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
