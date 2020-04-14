import { TestBed } from '@angular/core/testing';

import { SvgServiceService } from './svg-service.service';

describe('SvgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvgServiceService = TestBed.get(SvgServiceService);
    expect(service).toBeTruthy();
  });
});
