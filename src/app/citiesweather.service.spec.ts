import { TestBed } from '@angular/core/testing';

import { CitiesweatherService } from './citiesweather.service';

describe('CitiesweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesweatherService = TestBed.get(CitiesweatherService);
    expect(service).toBeTruthy();
  });
});
