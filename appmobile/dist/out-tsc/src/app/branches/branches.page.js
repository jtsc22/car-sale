import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BranchesPage = class BranchesPage {
    constructor() {
        this.searchText = "";
        this.branchList = [
            { name: "Sucursal 1", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
            { name: "Sucursal 2", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
            { name: "Sucursal 3", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
            { name: "Sucursal 4", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" }
        ];
    }
};
BranchesPage = tslib_1.__decorate([
    Component({
        selector: 'app-branches',
        templateUrl: 'branches.page.html',
        styleUrls: ['branches.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BranchesPage);
export { BranchesPage };
//# sourceMappingURL=branches.page.js.map