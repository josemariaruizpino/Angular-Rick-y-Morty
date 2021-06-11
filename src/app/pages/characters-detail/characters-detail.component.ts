import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CharactersDetailService } from 'src/app/shared/services/characters-detail.service';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  
  character: any = {};  

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe(res=>{
        this.character = res;
        console.log(res);
      })
    });
  }

}

