import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfixComponent } from './payfix.component';

describe('PayfixComponent', () => {
  let component: PayfixComponent;
  let fixture: ComponentFixture<PayfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
