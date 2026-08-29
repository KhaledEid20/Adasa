import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ArticleComponent } from "../article/article.component";
import { ArticlesHendler } from '../../services/articles-hendler';
import { Article } from '../../../assets/Models/Article';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filteredArticles : Article[] = []
  articleService = inject(ArticlesHendler)

  constructor(){
    this.filteredArticles = this.articleService.getfilteredArticles()
  }
}