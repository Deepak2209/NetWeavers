import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.isUserValid();
      }
    });    
  }
  isTokenValid: Boolean = false;
  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/');
  }
  isUserValid() {
    if(localStorage.getItem('auth-token') !== null) {
      this.isTokenValid = true;
    } else {
      this.isTokenValid = false;
    }
  }
}
