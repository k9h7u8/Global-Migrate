import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuCollapsed: boolean = true

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(filter(x => x instanceof NavigationEnd))
    .subscribe((value) => {
      this.isMenuCollapsed = true
    })
  }
}