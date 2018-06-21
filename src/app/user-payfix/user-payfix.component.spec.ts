import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPayfixComponent } from './user-payfix.component';

describe('UserPayfixComponent', () => {
  let component: UserPayfixComponent;
  let fixture: ComponentFixture<UserPayfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPayfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPayfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
