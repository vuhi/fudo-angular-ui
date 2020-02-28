import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRecipeComponent } from './explore-recipe.component';

describe('SearchRecipeComponent', () => {
  let component: ExploreRecipeComponent;
  let fixture: ComponentFixture<ExploreRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
