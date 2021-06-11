import { TestBed } from '@angular/core/testing';

import { EpisodesDetailService } from './episodes-detail.service';

describe('EpisodesDetailService', () => {
  let service: EpisodesDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
