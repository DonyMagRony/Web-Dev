import { Component } from '@angular/core';
import { NavigationBarService } from '../navigation-bar.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private navigationService: NavigationBarService) {
  }

  return(){
    this.navigationService.goBack();
  } 
}
