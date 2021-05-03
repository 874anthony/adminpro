import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkIndexTheme = document.querySelector('#theme');

  constructor() {
    // Getting the theme path from the LocalStorage
    const urlTheme =
      localStorage.getItem('userTheme') ||
      './assets/css/colors/purple-dark.css';

    // Setting the attribute with the link of the theme
    this.linkIndexTheme?.setAttribute('href', urlTheme);
  }

  // Method to change the theme in the index based on the user setting
  changeThemeColor(themeColor: String) {
    const urlTheme = `./assets/css/colors/${themeColor}.css`;

    this.linkIndexTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('userTheme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const themeBoxes: NodeListOf<Element> = document.querySelectorAll(
      '.selector'
    );

    // Checking all the links

    themeBoxes.forEach((themeBox) => {
      // First remove the working class from all links
      themeBox.classList.remove('working');
      // Get the theme by using the data-theme attribute
      const buttonThemeName = themeBox.getAttribute('data-theme');

      // Build the URL with the theme
      const buttonThemeURL = `./assets/css/colors/${buttonThemeName}.css`;

      // Get the current user theme he has
      const currentUserTheme = this.linkIndexTheme?.getAttribute('href');

      // Add the class working if i'ts the same theme
      if (buttonThemeURL === currentUserTheme) {
        themeBox.classList.add('working');
      }
    });
  }
}
