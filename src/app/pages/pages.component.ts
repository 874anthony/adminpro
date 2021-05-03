import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): any;

// Services
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    customInitFunctions();
  }
}
