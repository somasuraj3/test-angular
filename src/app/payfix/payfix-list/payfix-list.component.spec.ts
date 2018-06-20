import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfixListComponent } from './payfix-list.component';

describe('PayfixListComponent', () => {
  let component: PayfixListComponent;
  let fixture: ComponentFixture<PayfixListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfixListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
