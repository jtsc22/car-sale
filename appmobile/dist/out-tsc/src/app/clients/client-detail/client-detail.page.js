import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
let ClientDetailPage = class ClientDetailPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.create = true;
        this.route.queryParams.subscribe((params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.client = this.router.getCurrentNavigation().extras.state.client;
                this.create = false;
            }
        }));
    }
    ngOnInit() {
    }
};
ClientDetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-client-detail',
        templateUrl: './client-detail.page.html',
        styleUrls: ['./client-detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute])
], ClientDetailPage);
export { ClientDetailPage };
//# sourceMappingURL=client-detail.page.js.map