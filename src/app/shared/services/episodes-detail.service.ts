import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesDetailService {

  constructor(private http: HttpClient) { }

  getEpisodesDetail(){
    return this.http.get('https://rickandmortyapi.com/api/episode/2')
  }
}
