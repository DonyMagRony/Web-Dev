import { Component, OnInit } from '@angular/core';
import { Photos } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';

import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationBarService } from '../navigation-bar.service';
@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!:Photos[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService ,private router: Router,private navigationService: NavigationBarService) {
  }
    
  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(){  
    const albumId = Number(this.route.snapshot.paramMap.get('albumId'));
    this.albumService.getPhotos(albumId).subscribe(albums => {
      this.photos = albums;
    });
  }
  return(){
    this.navigationService.goBack();
  }  
  forward(){
    this.navigationService.goForward();
  } 
}
