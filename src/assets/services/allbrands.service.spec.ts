import { TestBed, inject } from '@angular/core/testing';

import { AllbrandsService } from './allbrands.service';

describe('AllbrandsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllbrandsService]
    });
  });

  it('should be created', inject([AllbrandsService], (service: AllbrandsService) => {
    expect(service).toBeTruthy();
  }));
});
