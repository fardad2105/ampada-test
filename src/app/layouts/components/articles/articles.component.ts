import { ArticlesDto } from './../../../core/model/articleDto';
import { Component, OnInit } from '@angular/core';
import { PaginationResponse } from 'src/app/shared/contracts/pagination-response.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  _page = 1;
  _totalPages = 1;
  _totalItems = 10;

  loading = false;
  responseDto!: PaginationResponse<ArticlesDto>;
  articles!: ArticlesDto[];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.loading = true;
    this.articleService.getArticles('tesla', 12, this._page).subscribe({
      next: (res: any) => {
        this.loading = false;
        this._page = res.page;
        this._totalPages = res.total_pages;
        this._totalItems = res.total_hits;
        this.articles = res.articles;
        console.log(this.articles);
      },
      error: (err) => (this.loading = false),
    });
  }

  paginationChange(ev: any) {
    this._page = ev.page;
    this.getArticles();
  }
}
