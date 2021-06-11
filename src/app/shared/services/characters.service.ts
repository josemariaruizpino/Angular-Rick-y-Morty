import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  getCharacter(idCharacter){
    return this.http.get(`https://rickandmortyapi.com/api/character/${idCharacter}`)
  }

  // postCharacter(){
  //   return this.http.post('https://rickandmortyapi.com/api/character', {})
  // }
}
