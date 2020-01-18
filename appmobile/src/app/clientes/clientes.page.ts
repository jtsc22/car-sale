import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalidadesPage } from '../localidades/localidades.page';

@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss']
})
export class ClientesPage {
  localidades = [{id : 1, name : "La Romana" },{id : 2, name : "La Vega" }]
  constructor(private modalCtrl : ModalController) {}

  viewDetail(){
    // this.router.navigate(['/detail'])
  }

  create(){
    // this.router.navigate(['/create'])
  }

  async openList() {

      const modal = await this.modalCtrl.create({
        component: LocalidadesPage,
        componentProps: {
          dataList: this.localidades
        }
      });

      await modal.present();
      let result = await modal.onDidDismiss();

      // if (result.data) {
      //   if (this.beneficiary.institution !== result.data.institution) { this.cleanFormData(); }

      //   this.beneficiary.bankCode = result.data.bank_code;
      //   this.beneficiary.bank = result.data.bank_code;
      //   this.beneficiary.institution = result.data.institution;
      //   this.beneficiary.internal = (result.data.short_name === "APOP") ? true : false;
      //   this.beneficiary.disabledCreate = (this.beneficiary.internal) ? true : false;
      // }
  }
}
