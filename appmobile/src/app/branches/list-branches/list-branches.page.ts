import { Component, OnInit, Input } from '@angular/core';
import { Branches } from '../../models/branches.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.page.html',
  styleUrls: ['./list-branches.page.scss'],
})
export class ListBranchesPage implements OnInit {
 
  @Input() dataList: Branches[] = [];
  searchText: string = "";
  
  constructor(private modalCrtl : ModalController) { }

  ngOnInit() {
    console.log(this.dataList)
  }

  async back() {
    await this.modalCrtl.dismiss();
  }

  async closeDialog(data : any) {
    await this.modalCrtl.dismiss(data);
  }

}
