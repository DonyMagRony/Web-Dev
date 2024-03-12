import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Album } from '../model';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone:true,
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, RouterModule, FormsModule] // Include RouterModule in the imports array
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  str: string = '';
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private albumService: AlbumService,private router: Router) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum(): void {
    if (!this.album) return;
    this.album.title = this.str;
    this.albumService.updateAlbum(this.album).subscribe((updatedAlbum) => {
      this.album = updatedAlbum;
    });
  }
  return(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }  
} 
