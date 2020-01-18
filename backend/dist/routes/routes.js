"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carSaleControllers_1 = require("../controllers/carSaleControllers");
var genericControllers_1 = require("../controllers/genericControllers");
var Route = /** @class */ (function () {
    function Route() {
        this.carSale = new carSaleControllers_1.CarSaleControllers();
        this.generic = new genericControllers_1.GenericControllers();
    }
    Route.prototype.routes = function (app) {
        app.route("/api/carsale/clients").get(this.carSale.getClient);
        app.route("/api/carsale/client/").post(this.carSale.createClient);
        app.route("/api/carsale/client/").put(this.carSale.updateClient);
        app.route("/api/carsale/client/:client_id").delete(this.carSale.deleteClient);
        app.route("/api/carsale/Concessionaires").get(this.generic.getConcessionaire);
        app.route("/api/carsale/Concessionaire/").post(this.generic.createConcessionaire);
        app.route("/api/carsale/locations").get(this.generic.getLocality);
        app.route("/api/carsale/location/").post(this.generic.createLocality);
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=routes.js.map