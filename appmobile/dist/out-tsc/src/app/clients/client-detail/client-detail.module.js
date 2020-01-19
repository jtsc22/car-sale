import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientDetailPageRoutingModule } from './client-detail-routing.module';
import { ClientDetailPage } from './client-detail.page';
let ClientDetailPageModule = class ClientDetailPageModule {
};
ClientDetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ClientDetailPageRoutingModule
        ],
        declarations: [ClientDetailPage]
    })
], ClientDetailPageModule);
export { ClientDetailPageModule };
//# sourceMappingURL=client-detail.module.js.map