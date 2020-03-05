import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelicousComponent } from './delicous.component';

describe('DelicousComponent', () => {
  let component: DelicousComponent;
  let fixture: ComponentFixture<DelicousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelicousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelicousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
