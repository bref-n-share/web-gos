import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaCreatorComponent } from './orga-creator.component';

describe('OrgaCreatorComponent', () => {
  let component: OrgaCreatorComponent;
  let fixture: ComponentFixture<OrgaCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
