import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { Notfound404Component } from './notfound404/notfound404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

// Imported modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [Notfound404Component, DashboardComponent, PagesComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [PagesComponent],
})
export class PagesModule {}
