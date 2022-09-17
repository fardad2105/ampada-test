import { Component, OnInit } from '@angular/core';
import { ArticlesDto } from 'src/app/core/model/articleDto';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  artDetails!: ArticlesDto;
  suggestionArticles!: ArticlesDto[];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getDetails();
    this.getSuggestionArticles();
  }

  getDetails() {
    this.artDetails = this.articleService.getArticleDetails();
  }

  getSuggestionArticles() {
    this.suggestionArticles = this.articleService.getArticleSuggestion();
  }
}
