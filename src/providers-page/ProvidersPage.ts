import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import {MaterializeDirective} from "angular2-materialize";
import {SideNavComponent} from '../common/site/sidenav';
import { AuthHttp } from 'angular2-jwt';

let template = require('./assets/providers-page.html');

@Component({
    selector: 'gtr-provider-page',
    templateUrl: template,
    directives: [CORE_DIRECTIVES, MaterializeDirective, SideNavComponent],
})

export class ProvidersPageComponent implements OnInit {
    public link;
    public linkLogOut;
    public linkPurchases;
    jwt: string;
    decodedJwt: string;
    api: string;
    
    ngOnInit() {
        this.link =  ['Providers'];
        this.linkLogOut = ['Login'];
        this.linkPurchases = ['PurchaseOrders'];
    }

    constructor(private router: Router, public http: Http, public authHttp: AuthHttp) {
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }

    goBack() {
        this.router.navigate(this.link);
    }
    
    goOrders() {
        this.router.navigate(this.linkPurchases);
    }
    
    logOut() {
        this.router.navigate(this.linkLogOut); 
    }
}


