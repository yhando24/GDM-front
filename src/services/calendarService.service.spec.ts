import { TestBed } from '@angular/core/testing';

import { calendarService } from './calendarService.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: calendarService = TestBed.get(calendarService);
    expect(service).toBeTruthy();
  });
});
