import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayfixComponent } from './admin-payfix.component';

describe('AdminPayfixComponent', () => {
  let component: AdminPayfixComponent;
  let fixture: ComponentFixture<AdminPayfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPayfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPayfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
