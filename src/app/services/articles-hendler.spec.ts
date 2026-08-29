import { TestBed } from '@angular/core/testing';

import { ArticlesHendler } from './articles-hendler';

describe('ArticlesHendler', () => {
  let service: ArticlesHendler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesHendler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
