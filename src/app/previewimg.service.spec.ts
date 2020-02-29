/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreviewimgService } from './previewimg.service';

describe('Service: Previewimg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewimgService]
    });
  });

  it('should ...', inject([PreviewimgService], (service: PreviewimgService) => {
    expect(service).toBeTruthy();
  }));
});
