import { Injectable } from '@angular/core';
import { Article } from '../../assets/Models/Article';
import articleData from '../../assets/data/posts.json'

@Injectable({
  providedIn: 'root',
})
export class ArticlesHendler {
    protected articles : Article[] = articleData.posts;
  getfilteredArticles() {
    return this.articles.filter(a => a.id <= 3);
  }
  getById(id:number){
    return this.articles.find(s => s.id === id)
  }
  getAllData(){
    return this.articles
  }
  getByFilter(filter : string){
    return this.articles.filter(a => a.category == filter);
  }
}