import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorLeaderboardComponent } from './donator-leaderboard.component';

describe('DonatorLeaderboardComponent', () => {
  let component: DonatorLeaderboardComponent;
  let fixture: ComponentFixture<DonatorLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
