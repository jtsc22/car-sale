import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestService } from '../services/request.service';
import { Locations } from '../models/locations.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  @Input() dataList: Locations[] = [];
  searchText: string = "";
  constructor(private modalCrtl : ModalController) { }

  ngOnInit() {
    console.log(this.dataList)
  }

  async ionViewWillEnter(){

  }

  search(ev: any) {
    this.searchText = ev.detail.value;
  }

  async back() {
    await this.modalCrtl.dismiss();
  }

  async closeDialog(data : any) {
    await this.modalCrtl.dismiss(data);
  }
}
