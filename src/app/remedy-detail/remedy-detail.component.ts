import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewRemedyService } from '../services/new-remedy.service';
import { MatBottomSheet } from '@angular/material';
import { CommentComponent } from '../comment/comment.component';
import { AuthService } from '../services/auth.service';
import { NewRemedyComponent } from '../new-remedy/new-remedy.component';

@Component({
  selector: 'app-remedy-detail',
  templateUrl: './remedy-detail.component.html',
  styleUrls: ['./remedy-detail.component.scss']
})
export class RemedyDetailComponent implements OnInit {

  user: any;
  remedy: any = {};
  fav = false;
  arrayComments = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private remedyService: NewRemedyService,
    private bottomSheet: MatBottomSheet
  ) {

    this.route.params.subscribe(params => {
      const idRemedy = this.route.snapshot.params['id'];
      this.remedyService.getOneRemedy(idRemedy).subscribe(oneRemedy => {
        this.remedy = oneRemedy;
      });
    });

    this.user = JSON.parse(sessionStorage.getItem('user'));
   }
  addFav() {
   this.fav = !this.fav;
  }

  ngOnInit() {
  }
  openBottomSheet() {
    const sheet = this.bottomSheet.open(CommentComponent, {
      data: this.remedy
    });
    sheet.backdropClick().subscribe(() => {
      console.log('dbclicked');
    });
    sheet.afterDismissed().subscribe((comment) => {
      if (this.remedy.comments.length === 0) {
        this.arrayComments.push(comment);
      }
      this.remedy.comments.push(comment);
    });
  }
  show() {
    return this.authService.show();
  }
  openEdit() {
    const sheet = this.bottomSheet.open(NewRemedyComponent, {
      data: this.remedy
    });
    sheet.backdropClick().subscribe(() => {
      console.log('dbclicked');
    });
    sheet.afterDismissed();
  }
}
