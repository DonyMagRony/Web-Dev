import { Component } from '@angular/core';
import { NavigationBarService } from '../navigation-bar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private navigationService: NavigationBarService) {}

  forward(){
    this.navigationService.goForward();
  } 
}
