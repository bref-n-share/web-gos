import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBigComponent } from './filter-big.component';

describe('FilterBigComponent', () => {
  let component: FilterBigComponent;
  let fixture: ComponentFixture<FilterBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
