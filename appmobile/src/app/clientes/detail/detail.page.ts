import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalidadesPage } from '../../localidades/localidades.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private modalCtrl : ModalController,   private location: Location,) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
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
