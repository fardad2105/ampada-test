import { ArticlesDto } from './../../../core/model/articleDto';
import { Component, OnInit } from '@angular/core';
import { PaginationResponse } from 'src/app/shared/contracts/pagination-response.interface';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

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
  filterSuggestArticles!: ArticlesDto[];
  articles!: ArticlesDto[];
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
      error: (err) => (this.loading = true),
    });
  }

  paginationChange(ev: any) {
    this._page = ev.page;
    this.getArticles();
  }

  showDetails(art: ArticlesDto) {
    this.articleService.setArticleDetails(art);
    this.setSuggestArticles(art);
    this.router.navigate(['details'], { relativeTo: this.route });
  }

  setSuggestArticles(art: ArticlesDto) {
    this.filterSuggestArticles = this.articles.filter(
      (value) => value._id !== art._id
    );

    this.articleService.setArticleSuggestion(this.filterSuggestArticles);
  }
}
