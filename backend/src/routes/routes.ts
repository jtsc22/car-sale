import * as express from 'express';
import { CarSaleControllers } from '../controllers/carSaleControllers';
import { GenericControllers } from '../controllers/genericControllers';

export class Route {

  public carSale: CarSaleControllers = new CarSaleControllers();
  public generic: GenericControllers = new GenericControllers();

  public routes(app: express.Application): void {

    app.route("/api/carsale/clients").get(this.carSale.getClient);
    app.route("/api/carsale/client/").post(this.carSale.createClient);
    app.route("/api/carsale/client/").put(this.carSale.updateClient);
    app.route("/api/carsale/client/:client_id").delete(this.carSale.deleteClient);

    app.route("/api/carsale/branches").get(this.generic.getConcessionaire);
    app.route("/api/carsale/branch/").post(this.generic.createConcessionaire);

    app.route("/api/carsale/locations").get(this.generic.getLocality);
    app.route("/api/carsale/location/").post(this.generic.createLocality);

}
}