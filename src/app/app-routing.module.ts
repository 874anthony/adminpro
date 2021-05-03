import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { Notfound404Component } from './pages/notfound404/notfound404.component';

const routes: Routes = [
  // Path: /dashboard, module: PagesRoutingModule
  // Path: /auth, module: AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Routes doesn't exist
  { path: '**', component: Notfound404Component },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
