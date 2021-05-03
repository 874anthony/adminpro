// Built-in modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Exported Components
import { Notfound404Component } from './notfound404/notfound404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Imported modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    Notfound404Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [PagesComponent],
})
export class PagesModule {}
