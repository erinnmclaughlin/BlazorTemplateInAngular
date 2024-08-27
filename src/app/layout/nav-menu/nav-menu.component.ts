import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  collapsed:boolean = false;

  toggleNavMenu() {
    this.collapsed = !this.collapsed;
  }
}
