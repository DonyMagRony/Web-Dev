import { Component } from '@angular/core';
import { NavigationBarService } from '../navigation-bar.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports:[],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private navigationService: NavigationBarService) {
  }

  return(){
    this.navigationService.goBack();
  } 
  forward(){
    this.navigationService.goForward();
  } 
}
