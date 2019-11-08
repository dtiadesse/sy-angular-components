import { TestBed } from '@angular/core/testing';

import { SyComponentsService } from './sy-components.service';

describe('SyComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyComponentsService = TestBed.get(SyComponentsService);
    expect(service).toBeTruthy();
  });
});
