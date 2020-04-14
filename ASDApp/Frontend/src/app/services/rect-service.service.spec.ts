import { TestBed } from '@angular/core/testing';

import { RectServiceService } from './rect-service.service';

describe('RectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RectServiceService = TestBed.get(RectServiceService);
    expect(service).toBeTruthy();
  });
});
