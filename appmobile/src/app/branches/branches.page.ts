import { Component } from '@angular/core';
import { Branches } from '../models/branches.model';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-branches',
  templateUrl: 'branches.page.html',
  styleUrls: ['branches.page.scss']
})
export class BranchesPage {

  searchText: string = "";
  branchList : Branches[] = []
  // branchList = [
  //   { name: "Sucursal 1", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
  //   { name: "Sucursal 2", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
  //   { name: "Sucursal 3", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" },
  //   { name: "Sucursal 4", address: "Independencia Km 10 1/2, Edificio Elsa I, Urb. Atlantida" }
  // ]

  constructor(private request : RequestService) { }

  async ionViewWillEnter(){
   this.branchList = await this.request.getBranches();
   console.log(this.branchList)
  }

}
