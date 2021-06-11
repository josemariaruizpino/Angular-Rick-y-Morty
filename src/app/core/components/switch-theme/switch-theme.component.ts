import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const defaultTheme = localStorage.getItem('theme');
    if (defaultTheme) {

      const theme$$ = document.querySelector('[data-theme]');
      theme$$.setAttribute('data-theme', defaultTheme)

    }

  }

  changeTheme() {
    const theme$$ = document.querySelector('[data-theme]');
    const theme = theme$$.getAttribute('data-theme');

    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme)
    theme$$.setAttribute('data-theme', newTheme)
  }

}
