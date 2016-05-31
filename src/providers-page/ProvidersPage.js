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
var sidenav_1 = require('../site/sidenav');
var ProvidersPageComponent = (function () {
    function ProvidersPageComponent(router) {
        this.router = router;
    }
    ProvidersPageComponent.prototype.ngOnInit = function () {
        this.link = ['Providers'];
        this.linkLogOut = ['Login'];
        this.linkPurchases = ['PurchaseOrders'];
    };
    ProvidersPageComponent.prototype.goBack = function () {
        this.router.navigate(this.link);
    };
    ProvidersPageComponent.prototype.goOrders = function () {
        this.router.navigate(this.linkPurchases);
    };
    ProvidersPageComponent.prototype.logOut = function () {
        this.router.navigate(this.linkLogOut);
    };
    ProvidersPageComponent = __decorate([
        core_1.Component({
            selector: 'gtr-provider-page',
            templateUrl: 'app/components/providers-page/assets/providers-page.html',
            directives: [angular2_materialize_1.MaterializeDirective, sidenav_1.SideNavComponent],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ProvidersPageComponent);
    return ProvidersPageComponent;
}());
exports.ProvidersPageComponent = ProvidersPageComponent;
//# sourceMappingURL=providerspage.js.map