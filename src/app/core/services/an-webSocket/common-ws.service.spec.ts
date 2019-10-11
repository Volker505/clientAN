import { TestBed } from '@angular/core/testing';

import { CommonWSService } from './common-ws.service';

describe('CommonWSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonWSService = TestBed.get(CommonWSService);
    expect(service).toBeTruthy();
  });
});
