import { EpisodesService } from './../../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes:any;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((res:any)=> {
      this.episodes = res.results;
    })
  }

}
