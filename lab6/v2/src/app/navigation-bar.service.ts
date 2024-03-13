import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {
  private routeStack: string[] = [];
  private forwardStack: string[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        const previousUrl = this.routeStack[this.routeStack.length - 1];
        if (currentUrl && currentUrl !== previousUrl) {
          this.routeStack.push(currentUrl);
          this.forwardStack = []; // Clear forward stack upon new navigation
        }
        console.log('Route Stack:', this.routeStack);
      }
    });
  }

  goBack(): void {
    if (this.routeStack.length > 1) {
      const currentRoute = this.routeStack.pop();
      const previousRoute = this.routeStack[this.routeStack.length - 1];
      if (currentRoute && previousRoute) {
        this.router.navigateByUrl(previousRoute);
        this.forwardStack.push(currentRoute); // Add current route to forward stack
      }
    } else {
      console.log('No previous route available');
    }
  }

  goForward(): void {
    const nextRoute = this.forwardStack.pop();
    if (nextRoute) {
      this.routeStack.push(nextRoute); // Add next route to route stack
      this.router.navigateByUrl(nextRoute);
    } else {
      console.log('No forward route available');
    }
  }
}
