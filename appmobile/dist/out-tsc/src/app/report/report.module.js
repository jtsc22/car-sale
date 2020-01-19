import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportPage } from './report.page';
let ReportPageModule = class ReportPageModule {
};
ReportPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: ReportPage }])
        ],
        declarations: [ReportPage]
    })
], ReportPageModule);
export { ReportPageModule };
//# sourceMappingURL=report.module.js.map