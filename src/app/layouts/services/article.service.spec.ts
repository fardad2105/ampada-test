import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService]
    });
    service = TestBed.inject(ArticleService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
