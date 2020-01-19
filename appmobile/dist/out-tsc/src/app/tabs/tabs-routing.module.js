import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'clients',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../clients/client-list/client-list.module').then(m => m.ClientListPageModule)
                    }
                ]
            },
            {
                path: 'branches',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../branches/branches.module').then(m => m.BranchesPageModule)
                    }
                ]
            },
            {
                path: 'report',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/clients',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/clients',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map