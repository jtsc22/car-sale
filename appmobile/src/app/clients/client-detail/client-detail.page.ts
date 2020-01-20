import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ModalController, AlertController } from '@ionic/angular';
import { LocationsPage } from '../../locations/locations.page';
import { Locations } from '../../models/locations.model';
import { Branches } from '../../models/branches.model';
import { ListBranchesPage } from '../../branches/list-branches/list-branches.page';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
})

export class ClientDetailPage {

  client: any = { id: "", name: "", locality: { id: "", name: "" }, concessionaire: { id: "", name: "" } };
  create: boolean = true;
  locations: Locations[] = [];
  branches: Branches[] = []
  title: string = "Nuevo Cliente"

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: RequestService,
    private modalCtrl: ModalController,
    public alertController: AlertController) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.client = this.router.getCurrentNavigation().extras.state.client;
        console.log(this.client)
        this.create = false;
        this.title = "Detalle de cliente"
      }
    });
  }


  clickBtn() {
    (this.create) ? this.createClient() : this.editClient();
  }

  async createClient() {
    if (!this.client.name) {
      this.showAlert("Aviso", "El campo nombre es requerido")
      return;
    }
    if (!this.client.locality.name) {
      this.showAlert("Aviso", "El campo ubicación es requerido")
      return;
    }

    try {

      let result: any = await this.request.createClient(this.client)

      if (!result.success) {
        await this.showAlert("Error", "Ocurrio un error al momento de crear el cliente")
        return;
      }

      await this.showAlert("Notificación", "Cliente creado correctamente")
      this.router.navigate(['tabs/clients']);
    } catch (e) {
      console.log(e)
    }
  }

  async editClient() {
    try {

      let result: any = await this.request.updateClient(this.client)

      if (!result.success) {
        await this.showAlert("Error", "Ocurrio un error al momento de editar el cliente");
        return;
      }

      await this.showAlert("Notificación", "Cliente editado correctamente");
      this.router.navigate(['tabs/clients']);
      return;
    } catch (e) {
      console.log(e)
    }

  }

  async deleteClient(id: any) {

    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que desea elimar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log("a")
          }
        }, {
          text: 'Eliminar',
          handler: async () => {
            try {
              let result = await this.request.deteleClient(id);
              console.log(result)
              if (!result.success) {
                await this.showAlert("Error", "Ocurrio un error al momento de eliminar cliente")
                return;
              }
              await this.showAlert("Notificación", "Registro eliminado correctamente")
              this.router.navigate(['tabs/clients']);
              return;
            } catch (e) {
              console.log(e)
            }
          }
        }
      ]
    });

    await alert.present();
  }


  async openListLocations() {
    try {
      this.locations = await this.request.getLocations();
      const modal = await this.modalCtrl.create({
        component: LocationsPage,
        componentProps: {
          dataList: this.locations
        }
      });

      await modal.present();
      let result = await modal.onDidDismiss();

      if (result.data) {
        this.client.locality = result.data;
        console.log(this.client)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async openBranches() {
    try {
      this.branches = await this.request.getBranches();
      console.log(this.branches)
      const modal = await this.modalCtrl.create({
        component: ListBranchesPage,
        componentProps: {
          dataList: this.branches
        }
      });

      await modal.present();
      let result = await modal.onDidDismiss();
      console.log(result)
      if (result.data) {
        this.client.concessionaire = result.data;
        console.log(this.client)
      }
    } catch (e) {
      console.log(e)
    }
  }


  async showAlert(type: string, message?: string) {
    const alert = await this.alertController.create({
      header: type,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Seguro que desea elimar este registro',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


}
