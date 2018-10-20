import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorRequestComponent } from './collector-request.component';

describe('CollectorRequestComponent', () => {
  let component: CollectorRequestComponent;
  let fixture: ComponentFixture<CollectorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
