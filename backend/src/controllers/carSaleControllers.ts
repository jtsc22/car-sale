import { Request, Response } from "express";
import carSaleServices from "../repositories/carSaleServices";

export class CarSaleControllers {

  public async getClient(req: Request, res: Response) {
    try {
      console.log(`Consultando listado de cliente`);
      let result = await carSaleServices.findClients();
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error consultando listado de cliente: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async createClient(req: Request, res: Response) {
    try {
      console.log(`Creando cliente`);
      let result = await carSaleServices.createClients(req.body);
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error creando cliente: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async updateClient(req: Request, res: Response) {
    try {
      console.log(`Actualizando cliente`);
      let result = await carSaleServices.updateClients(req.body, req.body.id);
        res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error actualizando cliente: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async deleteClient(req: Request, res: Response) {
    try {
      console.log(`Eliminando cliente`);
      let result = await carSaleServices.deleteClients(req.params.client_id);
        res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error eliminando cliente: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  // public async getContactsPDF(req: Request, res: Response) {
  //   try {
  //     console.log(`Consultando listado de Contactos`);
  //     let result = await carSaleServices.getPDF();
  //   } catch (err) {
  //     console.log(`Error consultando listado de Contactos: ${err}`);
  //     res.status(err.code).send({ success: err.success, data: err.data });
  //   }
  // }

}