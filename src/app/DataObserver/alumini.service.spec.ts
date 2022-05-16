import { TestBed } from '@angular/core/testing';

import { AluminiService } from './alumini.service';

describe('AluminiService', () => {
  let service: AluminiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluminiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
