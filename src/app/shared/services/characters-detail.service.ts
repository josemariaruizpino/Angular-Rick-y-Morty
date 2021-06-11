import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersDetailService {

  constructor(private http: HttpClient) { }

  getCharactersDetail(){
    return this.http.get('https://rickandmortyapi.com/api/character/2')
  }
}