"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var routes_1 = require("./routes/routes");
var Server = /** @class */ (function () {
    function Server() {
        this.route = new routes_1.Route();
        this.app = express();
        this.config();
        this.route.routes(this.app);
    }
    Server.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    };
    return Server;
}());
exports.default = new Server();
//# sourceMappingURL=server.js.map