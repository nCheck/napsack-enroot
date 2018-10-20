import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorQuestComponent } from './donator-quest.component';

describe('DonatorQuestComponent', () => {
  let component: DonatorQuestComponent;
  let fixture: ComponentFixture<DonatorQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
