import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSindromDownComponent } from './home-sindrom-down.component';

describe('HomeSindromDownComponent', () => {
  let component: HomeSindromDownComponent;
  let fixture: ComponentFixture<HomeSindromDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSindromDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSindromDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
