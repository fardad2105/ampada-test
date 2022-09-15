import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { MainComponent } from './components/main/main.component';
import { HeadComponent } from './components/head/head.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    MainComponent,
    HeadComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule { }
