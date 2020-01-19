import { Component } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { Clients } from '../../models/clients.model';

@Component({
  selector: 'app-client-list',
  templateUrl: 'client-list.page.html',
  styleUrls: ['client-list.page.scss']
})
export class ClientListPage {
  routerSubscription : any
  searchText: string = ""

  clientList : Clients[] = [];

  constructor(private router: Router, private request : RequestService) { 

  }

  async ionViewWillEnter(){
    this.routerWatch()
    this.load()
  }

  async load(){
    this.clientList = await this.request.getClients();
  }

  clientDetail(client: any) {
    let navigationExtras: NavigationExtras = { state: { client: client } };
    this.router.navigate(['/client-detail'], navigationExtras);
  }

  create() {
    this.router.navigate(['/client-detail']);
  }

  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if(event instanceof NavigationEnd) {
          if(event.url == '/tabs/clients')
          this.clientList = null;
          this.load()
        }
      }
    );
  }

  ionViewDidLeave(){
    this.clientList = null;
  }
  
}
