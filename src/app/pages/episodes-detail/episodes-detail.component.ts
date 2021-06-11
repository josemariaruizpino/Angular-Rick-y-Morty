import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from './../../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss']
})
export class EpisodesDetailComponent implements OnInit {

  episode: any = {};  

  constructor(private route: ActivatedRoute, private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idEpisode = params.get('idEpisode');

      this.episodesService.getEpisodes().subscribe(res=>{
        this.episode = res;
        console.log(res);
      })
    });
  }

}
