import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let ClientListPage = class ClientListPage {
    constructor(router) {
        this.router = router;
        this.searchText = "";
        this.clientList = [
            { name: "Cliente 1", branch: "La Romana" },
            { name: "Cliente 2", branch: "La Romana" },
            { name: "Cliente 3", branch: "San Pedro de Macoris" },
            { name: "Cliente 4", branch: "La Vega" },
            { name: "Cliente 5", branch: "La Vega" },
            { name: "Cliente 6", branch: "La Vega" },
            { name: "Cliente 7", branch: "La Vega" }
        ];
    }
    clientDetail(client) {
        let navigationExtras = { state: { client: client } };
        this.router.navigate(['/client-detail'], navigationExtras);
    }
};
ClientListPage = tslib_1.__decorate([
    Component({
        selector: 'app-client-list',
        templateUrl: 'client-list.page.html',
        styleUrls: ['client-list.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ClientListPage);
export { ClientListPage };
//# sourceMappingURL=client-list.page.js.map