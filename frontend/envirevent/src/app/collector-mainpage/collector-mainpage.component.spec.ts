import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorMainpageComponent } from './collector-mainpage.component';

describe('CollectorMainpageComponent', () => {
  let component: CollectorMainpageComponent;
  let fixture: ComponentFixture<CollectorMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
