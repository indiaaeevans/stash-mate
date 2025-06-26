import { TestBed } from '@angular/core/testing';

import { FabricsService } from './fabrics-service';

describe('FabricsService', () => {
  let service: FabricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
