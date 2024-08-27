import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavMenuComponent} from "./layout/nav-menu/nav-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavMenuComponent
  ]
})
export class AppComponent {
}
