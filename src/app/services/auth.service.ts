import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    /* url = 'http://localhost:3000/api/'; */
  url = '/api/';
  constructor(
    private http: Http
  ) { }

  signup(auth) {
    return this.http.post(this.url + 'signup', auth)
    .pipe(map(res => res.json()));
  }

  login(auth) {
    return this.http.post(this.url + 'login', auth, {withCredentials: true})
    .pipe(map(res => res.json()));
  }


  logout() {
    sessionStorage.removeItem('user');
    return this.http.get(this.url + 'logout').toPromise()
      .then((res: Response) => res.json())
      .catch(e => console.log(e));
  }
  show () {
    if (sessionStorage.getItem('user') === null) {
      return true;
    } else {
      return false;
    }
  }
}
