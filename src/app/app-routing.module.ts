import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Parents routes
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';

// Child routes
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  // Protected routes
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  // Public routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Routes doesn't exist
  { path: '**', component: Notfound404Component },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
