import { TestBed, inject } from '@angular/core/testing';

import { AFService } from './af.service';

describe('AFService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AFService]
    });
  });

  it('should be created', inject([AFService], (service: AFService) => {
    expect(service).toBeTruthy();
  }));
});
