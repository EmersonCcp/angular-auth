import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/shared/services/alert.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  title: string = 'Ocurrio un error';
  error = false;
  ipAddress!: string;
  browserInfo!: string;
  deviceInfo!: string;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService
  ) {
    // Inicializa el formulario y aplica la tipificación
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.alertService.loader();
    const { email, password } = this.loginForm.value;
    this.authenticationService.login(email, password).subscribe({
      next: (res) => {
        if (res.email) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this.alertService.successOrError(
          'Atención!',
          'Email o Contraseña incorrectas',
          'warning'
        );
      },
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
