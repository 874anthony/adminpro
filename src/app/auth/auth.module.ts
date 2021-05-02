// Built-in modules
import { NgModule } from '@angular/core';
// Ng-if directives
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule],
})
export class AuthModule {}
