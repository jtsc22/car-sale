import { Request, Response } from "express";
import genericServices from "../repositories/genericServices";

export class GenericControllers {

  public async getConcessionaire(req: Request, res: Response) {
    try {
      console.log(`Consultando listado de concensionario`);
      let result = await genericServices.findConcessionaire();
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error consultando listado de concensionario: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async createConcessionaire(req: Request, res: Response) {
    try {
      console.log(`Creando concensionario`);
      let result = await genericServices.createConcessionaire(req.body);
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error creando concensionario: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async getLocality(req: Request, res: Response) {
    try {
      console.log(`Consultando listado de localidades`);
      let result = await genericServices.findLocality();
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error consultando listado de localidades: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

  public async createLocality(req: Request, res: Response) {
    try {
      console.log(`Creando localidad`);
      let result = await genericServices.createLocality(req.body);
      res.status(200).send({ success: true, data: result });
    } catch (err) {
      console.log(`Error creando localidad: ${err}`);
      res.status(500).send({ success: false, data: err.message });
    }
  }

}