import { TestBed, inject } from '@angular/core/testing';

import { MainCategoriesService } from '../maincategories.service';

describe('CategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCategoriesService]
    });
  });

  it('should be created', inject([MainCategoriesService], (service: MainCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
