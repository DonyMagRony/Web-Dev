import { Component, OnInit } from '@angular/core';
import { Album } from '../model';
import { AlbumService } from '../album.service';
import { RouterLink ,Router,ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  standalone:true,
  styleUrls: ['./albums.component.css'],
  imports: [
    RouterLink,CommonModule,FormsModule
  ]
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  id:number=101;
  newAlbum:Album;
  url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private route: ActivatedRoute,private albumService: AlbumService,private router: Router) {
    this.albums=[];
    this.newAlbum={
      id:this.id+1,
      title:''
    } as Album;
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(
      (albums: Album[]) => {
        this.albums = albums;
        console.log(this.albums);
      },
      (error) => {
        console.error('Error fetching albums: ', error);
      }
    );
  }

  deleteAlbum(id:number){
    this.albums=this.albums.filter((a)=>a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted');
    });
  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe( (album) => {
      this.albums.push(album);
      this.newAlbum = {} as Album;
  });
  }
  return(){
    this.router.navigate(['../'], {relativeTo: this.route});
  } 
}
