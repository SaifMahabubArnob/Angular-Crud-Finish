import { TestBed } from '@angular/core/testing';

import { WebSocketMessegeingService } from './web-socket-messegeing.service';

describe('WebSocketMessegeingService', () => {
  let service: WebSocketMessegeingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketMessegeingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
