import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorWalletComponent } from './donator-wallet.component';

describe('DonatorWalletComponent', () => {
  let component: DonatorWalletComponent;
  let fixture: ComponentFixture<DonatorWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
