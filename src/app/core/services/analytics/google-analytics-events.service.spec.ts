import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsEventsService } from './google-analytics-events.service';

describe('GoogleAnalyticsEventsService', () => {
  let service: GoogleAnalyticsEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAnalyticsEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
