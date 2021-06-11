import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {

  private favorites: any = []

  constructor() { }

  addNewFavorite(newFavorite){
    const isAdded = !!this.favorites.find(favorite => favorite.id === newFavorite.id)
    if(!isAdded) {
      this.favorites.push(newFavorite);
    }
  }

  getFavorites(){
    return this.favorites;
  }
}
