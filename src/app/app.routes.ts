import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'blog',component:BlogComponent },
    {path: 'blog/:id' , component:ArticleComponent},
    {path:'about',component:AboutComponent}
];
