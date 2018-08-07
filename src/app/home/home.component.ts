import { Component, OnInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material';
import { NewRemedyComponent } from '../new-remedy/new-remedy.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NewRemedyService } from '../services/new-remedy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  remedies: any;
  user = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private bottomSheet: MatBottomSheet,
    private authService: AuthService,
    private router: Router,
    private remediesService: NewRemedyService,
  ) {
      this.remediesService.getAllRemedies().subscribe(res => {
        this.remedies = res;
      });
    }
  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      this.user = true;
    }
  }
  openBottomSheet() {
    const sheet = this.bottomSheet.open(NewRemedyComponent);

    sheet.backdropClick().subscribe(() => {
      console.log('dbclicked');
    });
    sheet.afterDismissed().subscribe((newRemedy) => {
      this.remedies.push(newRemedy);
    });
  }
  show() {
    return this.authService.show();
  }
  viewDetails(idRemedy) {
    this.router.navigate(['/remedyDetail/' + idRemedy], {
      skipLocationChange: true
    });
  }

}
