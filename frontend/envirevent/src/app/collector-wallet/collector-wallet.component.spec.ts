import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorWalletComponent } from './collector-wallet.component';

describe('CollectorWalletComponent', () => {
  let component: CollectorWalletComponent;
  let fixture: ComponentFixture<CollectorWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
