import { TestBed, inject } from '@angular/core/testing';

import { NaMainPageService } from './na-main-page.service';

describe('NaMainPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaMainPageService]
    });
  });

  it('should be created', inject([NaMainPageService], (service: NaMainPageService) => {
    expect(service).toBeTruthy();
  }));
});
