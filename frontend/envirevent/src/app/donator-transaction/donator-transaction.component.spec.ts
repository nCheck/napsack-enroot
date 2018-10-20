import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorTransactionComponent } from './donator-transaction.component';

describe('DonatorTransactionComponent', () => {
  let component: DonatorTransactionComponent;
  let fixture: ComponentFixture<DonatorTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
