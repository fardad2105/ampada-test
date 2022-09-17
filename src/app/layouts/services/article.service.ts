import { ArticlesDto } from './../../core/model/articleDto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from 'src/app/shared/contracts/pagination-response.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  article$: BehaviorSubject<ArticlesDto> = new BehaviorSubject<ArticlesDto>({});
  suggestionArticles$: BehaviorSubject<ArticlesDto[]> = new BehaviorSubject<ArticlesDto[]>([]);

  constructor(private httpClient: HttpClient) {}

  getArticles(keyword: string, pageSize: number, page:number) {
    // let queryParams = new HttpParams();
    // queryParams.append('q', keyword);
    // queryParams.append('page_size', pageSize);

    let header = new HttpHeaders();
    header = header.set(
      'x-api-key',
      '3gN_Q0NHp5JZ6gSFd8ht8KHpT1IN_i43lSKeTnysaVM'
    );
    return this.httpClient.get<PaginationResponse<ArticlesDto>>(
      `${environment.apiUrl}?q=${keyword}&page_size=${pageSize}&page=${page}`,
      { headers: header }
    );
  }

  setArticleDetails(article:ArticlesDto) {
    localStorage.setItem('select-article',JSON.stringify(article));
    // this.article$.next(article);
  }

  getArticleDetails(): ArticlesDto {
    const article: ArticlesDto = JSON.parse(localStorage.getItem('select-article') || '{}');
    return article;

  }

  setArticleSuggestion(articles: ArticlesDto[]) {
    localStorage.setItem('suggestion-articles',JSON.stringify(articles));
    // this.suggestionArticles$.next(articles);
  }

  getArticleSuggestion (): ArticlesDto[] {
    const suggestionarticles: ArticlesDto[] = JSON.parse(localStorage.getItem('suggestion-articles') || '[]');
    return suggestionarticles;
  }


}
