import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfixListItemComponent } from './payfix-list-item.component';

describe('PayfixListItemComponent', () => {
  let component: PayfixListItemComponent;
  let fixture: ComponentFixture<PayfixListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfixListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfixListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
