import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBranchesPage } from './list-branches.page';

const routes: Routes = [
  {
    path: '',
    component: ListBranchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBranchesPageRoutingModule {}
