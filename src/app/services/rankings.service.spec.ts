import { TestBed } from '@angular/core/testing';

import { RankingsService } from './rankings.service';

describe('RankingsService', () => {
  let service: RankingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
