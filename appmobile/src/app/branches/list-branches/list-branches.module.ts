import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBranchesPageRoutingModule } from './list-branches-routing.module';

import { ListBranchesPage } from './list-branches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBranchesPageRoutingModule
  ],
  declarations: [ListBranchesPage]
})
export class ListBranchesPageModule {}
