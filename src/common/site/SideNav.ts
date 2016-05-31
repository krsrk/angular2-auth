import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'gtr-sidenav',
    templateUrl: './src/common/site/assets/side-nav.html',
    directives: [MaterializeDirective],
})

export class SideNavComponent implements OnInit {
    public link;
    public linkLogOut;
    public linkPurchases;
    
    ngOnInit() {
        this.link =  ['ProvidersPage'];
        this.linkLogOut = ['Login'];
        this.linkPurchases = ['PurchaseOrders'];
    }
    
    constructor(
        private router: Router
        /**private heroService: HeroService**/) {
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


