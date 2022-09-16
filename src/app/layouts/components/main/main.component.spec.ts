import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GetTestDataArticle } from 'src/app/core/data/getArticleTestData';
import { ArticlesDto } from 'src/app/core/model/articleDto';
import { PaginationResponse } from 'src/app/shared/contracts/pagination-response.interface';
import { ArticleService } from '../../services/article.service';
import { ArticlesComponent } from '../articles/articles.component';
import { HeadComponent } from '../head/head.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let headcomponent: HeadComponent;
  let fixtureHead: ComponentFixture<HeadComponent>;

  let articlecomponent: ArticlesComponent;
  let fixtureArt: ComponentFixture<ArticlesComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MainComponent, HeadComponent,ArticlesComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      providers: [
        { provide: ArticleService},
      ]
    })

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureHead = TestBed.createComponent(HeadComponent);
    headcomponent = fixtureHead.componentInstance;
    fixture.detectChanges();

    fixtureArt = TestBed.createComponent(ArticlesComponent);
    articlecomponent = fixtureArt.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(headcomponent).toBeTruthy();
  });

  it('should create', () => {
    expect(articlecomponent).toBeTruthy();
  });
});
