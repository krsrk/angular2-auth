import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

let styles   = require('./login.css');
let template = require('./login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    let urlAuth = 'http://localhost:8000/api/authenticate';
    
    this.http.post(urlAuth, body, contentHeaders)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          //alert(error.error.text());
          console.log(error);
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}
