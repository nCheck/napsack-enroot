import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorQrcodeComponent } from './donator-qrcode.component';

describe('DonatorQrcodeComponent', () => {
  let component: DonatorQrcodeComponent;
  let fixture: ComponentFixture<DonatorQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
