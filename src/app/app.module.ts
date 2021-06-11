import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { SwitchThemeComponent } from './core/components/switch-theme/switch-theme.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { GalleryLocationsComponent } from './shared/components/gallery-locations/gallery-locations.component';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { GalleryEpisodesComponent } from './shared/components/gallery-episodes/gallery-episodes.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodesDetailComponent } from './pages/episodes-detail/episodes-detail.component';
import { MobileMenuComponent } from './core/components/mobile-menu/mobile-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    MenuComponent,
    GalleryComponent,
    SwitchThemeComponent,
    ContactPageComponent,
    FavoritesComponent,
    LocationsComponent,
    GalleryLocationsComponent,
    CharactersDetailComponent,
    GalleryEpisodesComponent,
    EpisodesComponent,
    EpisodesDetailComponent,
    MobileMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
