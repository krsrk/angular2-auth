import {Component} from '@angular/core';
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {ProvidersPageComponent} from '../providers-page/providerspage';

let template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ LoggedInRouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, as: 'Home' },
  { path: '/login', component: Login, as: 'Login' },
  { path: '/signup', component: Signup, as: 'Signup' },
  { path: '/proveedores', component: ProvidersPageComponent, as: 'Providers' }
])

export class App {
  constructor(public router: Router) {
  }
}
