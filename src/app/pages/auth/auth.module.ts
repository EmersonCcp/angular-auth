import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [CommonModule, SharedModule, AuthRoutes],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
})
export class AuthModule {}
