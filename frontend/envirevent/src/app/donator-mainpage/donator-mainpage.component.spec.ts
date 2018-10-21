import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorMainpageComponent } from './donator-mainpage.component';

describe('DonatorMainpageComponent', () => {
  let component: DonatorMainpageComponent;
  let fixture: ComponentFixture<DonatorMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
