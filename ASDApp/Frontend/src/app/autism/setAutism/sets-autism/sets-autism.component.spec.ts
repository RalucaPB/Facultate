import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsAutismComponent } from './sets-autism.component';

describe('SetsAutismComponent', () => {
  let component: SetsAutismComponent;
  let fixture: ComponentFixture<SetsAutismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsAutismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
