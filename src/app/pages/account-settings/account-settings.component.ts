import { Component, OnInit } from '@angular/core';

// Services
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  // Method to change the theme in the index based on the user setting
  changeTheme(themeColor: String) {
    this.settingsService.changeThemeColor(themeColor);
  }
}
