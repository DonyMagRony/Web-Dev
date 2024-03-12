import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photos } from './model';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  deleteAlbum(id: number) {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }
  createAlbum(album: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }
  updateAlbum(updatedAlbum:Album){
    return this.client.put<Album>(`${this.BASE_URL}/albums/${updatedAlbum.id}`, updatedAlbum)
  }
  getPhotos(id:Number):Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }
}
