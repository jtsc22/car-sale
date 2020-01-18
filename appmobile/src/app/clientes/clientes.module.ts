import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesPage } from './clientes.page';
import { LocalidadesPage } from '../localidades/localidades.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ClientesPage }])
  ],
  declarations: [ClientesPage]
})
export class CLientesPageModule {}
