import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = `http://localhost:3000/api/v1/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/register`, {
      username,
      email,
      password,
    });
  }
}
