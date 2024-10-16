import { TestBed } from '@angular/core/testing';

import { CommandServiceService } from './command-service.service';

describe('CommandServiceService', () => {
  let service: CommandServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
