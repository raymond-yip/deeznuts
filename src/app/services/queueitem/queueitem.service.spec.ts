import { TestBed } from '@angular/core/testing';

import { QueueitemService } from './queueitem.service';

describe('QueueitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueueitemService = TestBed.get(QueueitemService);
    expect(service).toBeTruthy();
  });
});
