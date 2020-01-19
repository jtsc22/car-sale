import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientListPage } from './client-list.page';
let ClientListPageModule = class ClientListPageModule {
};
ClientListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: ClientListPage }])
        ],
        declarations: [ClientListPage]
    })
], ClientListPageModule);
export { ClientListPageModule };
//# sourceMappingURL=client-list.module.js.map