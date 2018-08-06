import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = false;
  mode = new FormControl('push');

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    if (sessionStorage.getItem('user') === null) {
      this.user = true;
    }
  }
  ngOnInit() {
    if (sessionStorage.getItem('user') === null) {
      this.user = true;
    }
  }

  logout() {
    this.user = false;
    this.authService.logout();
    this.router.navigate(['home']);
  }
  show() {
    return this.authService.show();
  }
}
