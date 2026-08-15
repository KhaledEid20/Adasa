import { Component } from '@angular/core';
import {Article} from '../../../assets/Models/Article'
import articleData from '../../../assets/data/posts.json'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  articles: Article[] = articleData.posts;
  get filteredArticles() {
    return this.articles.filter(a => a.id <= 3);
}
}
