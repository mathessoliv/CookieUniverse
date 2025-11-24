import { TestBed } from '@angular/core/testing';

import { BolachaService } from './bolacha.service';

describe('BolachaService', () => {
  let service: BolachaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolachaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
