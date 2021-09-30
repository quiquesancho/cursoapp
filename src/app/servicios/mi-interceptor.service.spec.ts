import { TestBed } from '@angular/core/testing';

import { MiInterceptorService } from './mi-interceptor.service';

describe('MiInterceptorService', () => {
  let service: MiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
