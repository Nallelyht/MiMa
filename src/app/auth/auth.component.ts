import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogged = true;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

}
