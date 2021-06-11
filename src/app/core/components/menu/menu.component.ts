import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
(function() {

      var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),
    
        doToggle: function(e) {
          e.preventDefault();
          this.navToggle.classList.toggle('expanded');
          this.nav.classList.toggle('expanded');
        }
      };
    
      hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
      hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
    
    }());
}
}
