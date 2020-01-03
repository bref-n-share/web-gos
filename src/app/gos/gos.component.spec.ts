import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GosComponent } from './gos.component';

describe('DemandsComponent', () => {
  let component: GosComponent;
  let fixture: ComponentFixture<GosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
