import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewRemedyService } from '../services/new-remedy.service';

@Component({
  selector: 'app-remedy-detail',
  templateUrl: './remedy-detail.component.html',
  styleUrls: ['./remedy-detail.component.scss']
})
export class RemedyDetailComponent implements OnInit {
  remedy: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private remedyService: NewRemedyService
  ) {
    this.route.params.subscribe(params => {
      const idRemedy = this.route.snapshot.params['id'];
      this.remedyService.getOneRemedy(idRemedy).subscribe(oneRemedy => {
        console.log(oneRemedy);
        this.remedy = oneRemedy;
      });
    });
  }

  ngOnInit() {
  }

}
