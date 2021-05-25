import { TestBed } from '@angular/core/testing';

import { BehavioralSubjectService } from './behavioral-subject.service';

describe('BehavioralSubjectService', () => {
  let service: BehavioralSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioralSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
