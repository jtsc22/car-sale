import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../clients/client-list/client-list.module').then(m => m.ClientListPageModule)
          }
        ]
      },
      {
        path: 'branches',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../branches/branches.module').then(m => m.BranchesPageModule)
          }
        ]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../report/report.module').then(m => m.ReportPageModule)
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
