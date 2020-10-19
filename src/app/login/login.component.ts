import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirectOnLogin() {
    this.activatedRoute.queryParams.subscribe(params => {
      let redirectUrl = params['redirectUrl'];
      this.router.navigateByUrl(redirectUrl);
    });
  }

}
