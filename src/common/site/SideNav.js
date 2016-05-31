"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angular2_materialize_1 = require("angular2-materialize");
var SideNavComponent = (function () {
    function SideNavComponent(router) {
        this.router = router;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.link = ['ProvidersPage'];
        this.linkLogOut = ['Login'];
        this.linkPurchases = ['PurchaseOrders'];
    };
    SideNavComponent.prototype.goBack = function () {
        this.router.navigate(this.link);
    };
    SideNavComponent.prototype.goOrders = function () {
        this.router.navigate(this.linkPurchases);
    };
    SideNavComponent.prototype.logOut = function () {
        this.router.navigate(this.linkLogOut);
    };
    SideNavComponent = __decorate([
        core_1.Component({
            selector: 'gtr-sidenav',
            templateUrl: 'app/components/site/assets/side-nav.html',
            directives: [angular2_materialize_1.MaterializeDirective],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=sidenav.js.map