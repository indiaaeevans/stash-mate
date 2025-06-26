import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDetails } from './pattern-details';

describe('PatternDetails', () => {
  let component: PatternDetails;
  let fixture: ComponentFixture<PatternDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
