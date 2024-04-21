import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService],
})
export class SharedModule {}
