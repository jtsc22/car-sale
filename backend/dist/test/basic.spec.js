"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var server_1 = require("../server");
var chai = require("chai");
var request = require("supertest");
var expect = chai.expect;
describe("GET / public key APAP, method: key ", function () {
    it("Debe retornar status Ok 200 -> Servicio diponible", function (done) {
        request(server_1.default.app)
            .get("/api/authentication/key")
            .set("Content-Type", "application/json")
            .end(function (err, res) {
            if (err)
                return done(err);
            //console.log(res.body.data.publicKey)
            expect(res.status).to.equal(200);
            done();
        });
    });
});
describe("Despliegue en produccion", function () {
    it("El puerto para despligue en producion debe ser igual 8080", function () {
        expect(process.env.PORT).to.be.equal("8080");
    });
});
//# sourceMappingURL=basic.spec.js.map