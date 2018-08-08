import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  errorMail = false;
  user = null;
  newUser: any = {};

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
      this.errorMail = true;
    });
    }
  }

  login(auth) {
    this.authService.login(auth.value)
    .subscribe(user => {
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
