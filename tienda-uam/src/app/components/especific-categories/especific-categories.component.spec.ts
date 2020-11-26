import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificCategoriesComponent } from './especific-categories.component';

describe('EspecificCategoriesComponent', () => {
  let component: EspecificCategoriesComponent;
  let fixture: ComponentFixture<EspecificCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
