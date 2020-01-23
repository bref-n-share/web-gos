import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrgaDetailsComponent } from './manage-orga-details.component';

describe('ManageOrgaDetailsComponent', () => {
  let component: ManageOrgaDetailsComponent;
  let fixture: ComponentFixture<ManageOrgaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrgaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrgaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
