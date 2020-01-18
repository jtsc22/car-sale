"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerCtrl_1 = require("../controllers/CustomerCtrl");
var AppRoute = /** @class */ (function () {
    function AppRoute() {
        this.CustomerCtrl = new CustomerCtrl_1.CustomerCtrl();
        this.path = "/api/masterdata/";
    }
    AppRoute.prototype.routes = function (app) {
        // Routes for customer
        app.route(this.path + "customer/:customer").get(this.CustomerCtrl.getCustomer);
        app.route(this.path + "customer/points/:customer").get(this.CustomerCtrl.getCeritos);
        app.route(this.path + "customer/credit-card/history").post(this.CustomerCtrl.getHistory);
        app.route(this.path + "customer/credit-card/info").post(this.CustomerCtrl.getCustomerInfo);
        app.route(this.path + "customer/credit-card/merchant/used").post(this.CustomerCtrl.getConsume);
        app.route(this.path + "customer/credit-card/account/status").post(this.CustomerCtrl.getAccountStatus);
        app.route(this.path + "customer/credit-card/additional/").post(this.CustomerCtrl.getAdditional);
    };
    return AppRoute;
}());
exports.AppRoute = AppRoute;
//# sourceMappingURL=appRoute.js.map