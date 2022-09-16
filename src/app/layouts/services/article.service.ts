import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from 'src/app/shared/contracts/pagination-response.interface';
import { ArticlesDto } from 'src/app/core/model/articleDto';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
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
}
