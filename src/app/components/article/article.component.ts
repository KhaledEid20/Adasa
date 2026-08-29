import { Component, inject, Input, OnInit } from '@angular/core';
import { Article } from '../../../assets/Models/Article';
import { ArticlesHendler } from '../../services/articles-hendler';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  article: Article | undefined
  articleService = inject(ArticlesHendler)
  route = inject(ActivatedRoute)
  articles : Article[] = [];
  titles: string[] = [];
  content: string[] = [];
  stopped:boolean = true

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.article = this.articleService.getById(id)
      if(this.article?.content === undefined) return;
      this.parseMarkdownSections(this.article.content)
    });
  }

  get displayedTitles(): string[] {
    const index = this.titles.indexOf('الخلاصة');
    return index === -1 ? this.titles : this.titles.slice(0, index + 1);
  }

  parseMarkdownSections(md: string): void {
    const titles: string[] = [];
    const content: string[] = [];

    const parts: string[] = md.split(/\n##\s+/);

    const intro: string = parts[0].trim();
    if (parts[0].startsWith('## ')) {
      parts[0] = parts[0].replace(/^##\s+/, '');
    } else if (intro) {
      // titles.push(null)
      content.push(intro);
      parts.shift();
    }

    parts.forEach((part: string) => {
      const [firstLine, ...rest] = part.split('\n');
      titles.push(firstLine.trim());
      content.push(rest.join('\n').trim());
    });
      this.titles.push(...titles);
      this.content.push(...content);
  }
}