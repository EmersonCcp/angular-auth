import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/shared/services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {}

  logout() {
    this.alertService.loader();
    localStorage.removeItem('token');
    localStorage.removeItem('tokenFCM');
    this.router.navigate(['auth/login']);
  }
}
