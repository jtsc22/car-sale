import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Locations } from '../models/locations.model';
import { ModalController, AlertController } from '@ionic/angular';
import { LocationsPage } from '../locations/locations.page';
import { Clients } from '../models/clients.model';
import { Branches } from '../models/branches.model';
import { ListBranchesPage } from '../branches/list-branches/list-branches.page';
import { Router } from '@angular/router';
import * as pdfMake  from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {
  clientList: Clients[] = [];
  clientGrid: Clients[] = [];
  branches: Branches[] = [];
  routerSubscription : any;
  locations: Locations[] = []
  total: any = -1;
  locality: string;
  branch: string;
  pdf: any;

  constructor(
    private request: RequestService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public file: File,
    public fileOpener: FileOpener,
    public platform: Platform) { }

  async ionViewWillEnter(){
    this.clientList = await this.request.getClients();
  
  }

  async openList() {
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


      /**Filtro para obtener los cliente de una sucursal segun su localidad */
      this.clientGrid = this.clientList.filter((c: any) => { 
        return (c.locality.name === result.data.name && c.concessionaire.name === this.branch) 
      });

      this.total = this.clientGrid.length;

      if (!(this.total > 0)) {
        this.locality = ""
        this.showAlert("Aviso", "No se encontraron registros")
        return;
      }

      this.locality = result.data.name;
    }

  }

  async openBranches() {
    this.branches = await this.request.getBranches();
    this.locality = ""

    const modal = await this.modalCtrl.create({
      component: ListBranchesPage,
      componentProps: {
        dataList: this.branches
      }
    });

    await modal.present();
    let result = await modal.onDidDismiss();

    if (result.data) {

      this.clientGrid = this.clientList.filter((c: any) => { 
        return (c.concessionaire.name === result.data.name) 
      });
      this.total = this.clientGrid.length;

      if (!(this.total > 0)) {
        this.branch = ""
        this.showAlert("Aviso", "No se encontraron registros")
        return;
      }

      this.branch = result.data.name;
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

  downloadPDF(){
   
    let data: string [] = [];

    data.push("Sucursal : " + this.branch.toUpperCase())
    data.push(" ")
    
    data.push(" ")
    data.push('CLIENTE     |   LOCALIDAD ')
    data.push("____________________________________________________________________________________________")
    this.clientGrid.forEach((c : any, i : number) => {
      console.log(c)
    data.push(`${i} - ${c.name}  -  ${c.locality.name}`)
    data.push("_____________________________________________________________________________________________")  
    });



    let dataPdf = {
      content: data
    };

    this.pdf = pdfMake.createPdf(dataPdf);
 
    if (this.platform.is('cordova')) {
      this.pdf.getBuffer((buffer: BlobPart) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        
        this.file.writeFile(this.file.dataDirectory, 'report.pdf', blob, { replace: true }).then(fileEntry => {

          this.fileOpener.open(this.file.dataDirectory + 'report.pdf', 'application/pdf');
        });

      });

      return true;
    }

    this.pdf.download();

    }
  
  ionViewDidLeave(){
    this.clientList = null;
    this.clientGrid = null;
    this.total = -1
    this.locality = ""
    this.branch = ""
  }

}