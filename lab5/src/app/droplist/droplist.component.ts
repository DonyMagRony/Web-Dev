import { Component } from '@angular/core';;
import { Router } from '@angular/router';
import { categories } from '../categories';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrl: './droplist.component.css'
})
export class DroplistComponent {
  categories = [...categories]; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/category/');
  }

  selectedCategory(event: any){
    this.router.navigateByUrl('/category/' + event.target.value);
  }
} 