import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorVerifyComponent } from './collector-verify.component';

describe('CollectorVerifyComponent', () => {
  let component: CollectorVerifyComponent;
  let fixture: ComponentFixture<CollectorVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
