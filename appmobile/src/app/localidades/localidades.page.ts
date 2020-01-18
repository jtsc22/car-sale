import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.page.html',
  styleUrls: ['./localidades.page.scss'],
})
export class LocalidadesPage implements OnInit {
  @Input() dataList: any = [];
  searchText: string = "";
  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }
  search(ev: any) {
    this.searchText = ev.detail.value;
  }

  async back() {
    await this.modalCrtl.dismiss();
  }

  async closeDialog(data) {
    await this.modalCrtl.dismiss(data);
  }
}
