import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

/*   url = 'http://localhost:3000/api/comments/'; */
   url = '/api/comments/';

  constructor(private http: Http) {}

    // get all
  getAllComments() {
      return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }

  // create one
  createComment(obj) {
      return this.http.post(this.url, obj)
          .pipe(map((res: Response) => res.json()));
  }

}
