import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalidadesPage } from '../../localidades/localidades.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async openList() {

    const modal = await this.modalCtrl.create({
      component: LocalidadesPage,
      componentProps: {
        dataList: "banks"
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
