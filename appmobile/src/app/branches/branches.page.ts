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

  constructor(private request : RequestService) { 

  }

  async ionViewWillEnter(){
    try {
      this.branchList = await this.request.getBranches();
      console.log(this.branchList)
    } catch (e) {
      console.log(e)
    }
  
  }

}
