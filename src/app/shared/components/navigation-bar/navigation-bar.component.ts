import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private router: Router) {
  }

  public logout() {
    this.router.navigate(['/']);
  }
}
