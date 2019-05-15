import { TestBed } from '@angular/core/testing';

import { G006SupportService } from './g006-support.service';

describe('G006SupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: G006SupportService = TestBed.get(G006SupportService);
    expect(service).toBeTruthy();
  });
});
