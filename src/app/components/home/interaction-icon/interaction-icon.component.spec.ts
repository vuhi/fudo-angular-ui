import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionIconComponent } from './interaction-icon.component';

describe('InteractionIconComponent', () => {
  let component: InteractionIconComponent;
  let fixture: ComponentFixture<InteractionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
