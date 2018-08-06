import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewRemedyService {

  url = '/api/remedies/';
  constructor(private http: Http) {}

  // get all remedies
  getAllremedies() {
      return this.http.get(this.url).toPromise()
      .then((res: Response) => res.json())
      .catch(e => console.log(e));
  }
  // get one remedy
  getOneRemedy(id) {
      return this.http.get(this.url + id)
          .pipe(map((res: Response) => res.json()));
  }

  // create one remedy
  createRemedy(obj) {
      return this.http.post(this.url, obj)
          .pipe(map((res: Response) => res.json()));
  }

  // edit one remedy
  editOneRemedy(obj) {
  return this.http.put(this.url + obj._id, obj)
      .pipe(map((res: Response) => res.json()));
  }

  // delete one remedy richard
  deleteRemedy(id) {
      return this.http.delete(this.url + id)
          .pipe(map((res: Response) => res.json()));
  }
}
