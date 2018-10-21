import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorEventsComponent } from './donator-events.component';

describe('DonatorEventsComponent', () => {
  let component: DonatorEventsComponent;
  let fixture: ComponentFixture<DonatorEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
