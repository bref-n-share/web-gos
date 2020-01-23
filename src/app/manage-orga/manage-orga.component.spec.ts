import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrgaComponent } from './manage-orga.component';

describe('ManageOrgaComponent', () => {
  let component: ManageOrgaComponent;
  let fixture: ComponentFixture<ManageOrgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
