import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAlreadyCreatedComponent } from './account-already-created.component';

describe('AccountAlreadyCreatedComponent', () => {
  let component: AccountAlreadyCreatedComponent;
  let fixture: ComponentFixture<AccountAlreadyCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAlreadyCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAlreadyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
