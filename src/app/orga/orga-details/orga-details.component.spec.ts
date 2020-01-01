import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaDetailsComponent } from './orga-details.component';

describe('OrgaDetailsComponent', () => {
  let component: OrgaDetailsComponent;
  let fixture: ComponentFixture<OrgaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
