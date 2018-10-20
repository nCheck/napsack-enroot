import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectordetailsComponent } from './collectordetails.component';

describe('CollectordetailsComponent', () => {
  let component: CollectordetailsComponent;
  let fixture: ComponentFixture<CollectordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
