import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  newComment: any = {};
  user: any = {};

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<CommentComponent>,
    private commentService: CommentsService
  ) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {
  }
  addComment(comment) {
    this.newComment.idUser = this.user.id;
    this.newComment.idRemedy = this.data._id;
    this.newComment.body = comment.value;
    this.newComment.username = this.user.username;
    this.commentService.createComment(this.newComment).subscribe(commentNew => {
        this.bottomSheetRef.dismiss(commentNew);
    });
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
