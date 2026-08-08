import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavBarComponent ,HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
