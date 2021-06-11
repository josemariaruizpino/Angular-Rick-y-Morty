import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodesDetailComponent } from './pages/episodes-detail/episodes-detail.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'favorites', component:FavoritesComponent},
  {path: 'episodes', component:EpisodesComponent},
  {path: 'episodes/:idEpisodes', component:EpisodesDetailComponent},
  {path: 'locations', component:LocationsComponent},
  {path: 'characters/:idCharacter', component:CharactersDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
