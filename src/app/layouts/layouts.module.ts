import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { MainComponent } from './components/main/main.component';
import { HeadComponent } from './components/head/head.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxLoadingModule } from 'ngx-loading';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    MainComponent,
    HeadComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule,
    HttpClientModule,
    LayoutsRoutingModule,
    SharedModule,
    NgxLoadingModule
  ],
  providers: [ArticleService]
})
export class LayoutsModule { }
