import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notfound404Component } from './notfound404/notfound404.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    Notfound404Component,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
