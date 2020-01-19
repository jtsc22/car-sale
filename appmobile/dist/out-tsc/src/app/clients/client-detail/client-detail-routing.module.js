import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientDetailPage } from './client-detail.page';
const routes = [
    {
        path: '',
        component: ClientDetailPage
    }
];
let ClientDetailPageRoutingModule = class ClientDetailPageRoutingModule {
};
ClientDetailPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ClientDetailPageRoutingModule);
export { ClientDetailPageRoutingModule };
//# sourceMappingURL=client-detail-routing.module.js.map