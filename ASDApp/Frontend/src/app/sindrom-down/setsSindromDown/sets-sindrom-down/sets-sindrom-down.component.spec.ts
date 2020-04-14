import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsSindromDownComponent } from './sets-sindrom-down.component';

describe('SetsSindromDownComponent', () => {
  let component: SetsSindromDownComponent;
  let fixture: ComponentFixture<SetsSindromDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsSindromDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsSindromDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
