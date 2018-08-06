import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogged = false;
  errorMail = false;
  user = null;
  newUser = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    if (sessionStorage.getItem('user')) {
      this.router.navigate(['home']);
    }
  }

  signup(auth) {
    console.log(auth);
    if (auth.value.password === auth.value.password2) {
      this.newUser.username = auth.value.username;
      this.newUser.password = auth.value.password;
      this.newUser.email = auth.value.email;
      this.authService.signup(this.newUser)
    .subscribe(user => {
      this.user = user;
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home']);
    }, (err) => {
      console.log(JSON.parse(err._body));
      this.errorMail = true;
    });
    }
  }

  login(auth) {
    this.authService.login(auth.value)
    .subscribe(user => {
      console.log(user);
      this.user = user;
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home']);
    });
  }

  loginWithFacebook() {
    this.firebaseService.loginWithFacebook();
  }

  loginWithGoogle() {
    this.firebaseService.loginWithGoogle();
  }

  ngOnInit() { }

}
