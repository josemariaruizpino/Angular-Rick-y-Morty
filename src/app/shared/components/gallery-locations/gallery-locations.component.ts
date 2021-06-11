import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-locations',
  templateUrl: './gallery-locations.component.html',
  styleUrls: ['./gallery-locations.component.scss']
})
export class GalleryLocationsComponent implements OnInit {
  @Input() list: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
