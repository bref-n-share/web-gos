import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSmallComponent } from './filters-small.component';

describe('FiltersSmallComponent', () => {
  let component: FiltersSmallComponent;
  let fixture: ComponentFixture<FiltersSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
