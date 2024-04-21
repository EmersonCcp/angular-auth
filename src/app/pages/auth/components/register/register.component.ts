import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/shared/services/alert.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.alertService.loader();
    const { username, email, password } = this.form.value;
    this.authenticationService.register(username, email, password).subscribe({
      next: (res) => {
        if (res.email) {
          this.alertService.successOrError(
            'Registrado con exito!',
            'Aguarde..',
            'success'
          );
          this.router.navigate(['/auth/login']);
        }
      },
      error: (err) => {
        this.alertService.successOrError('Error', err.error.message, 'error');
      },
    });
  }
}
