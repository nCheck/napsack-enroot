import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorDonateComponent } from './donator-donate.component';

describe('DonatorDonateComponent', () => {
  let component: DonatorDonateComponent;
  let fixture: ComponentFixture<DonatorDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
