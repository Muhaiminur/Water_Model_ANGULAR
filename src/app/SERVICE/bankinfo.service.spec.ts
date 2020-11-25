import { TestBed } from '@angular/core/testing';

import { BankinfoService } from './bankinfo.service';

describe('BankinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankinfoService = TestBed.get(BankinfoService);
    expect(service).toBeTruthy();
  });
});
