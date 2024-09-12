import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeClicked: boolean = false;

  constructor() { }

  toggleTheme() {
    this.themeClicked = !this.themeClicked;
    console.log('theme service: ', this.themeClicked);
  }
}
