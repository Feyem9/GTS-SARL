import { TestBed } from '@angular/core/testing';

import { AouthService } from './aouth.service';

describe('AouthService', () => {
  let service: AouthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AouthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
