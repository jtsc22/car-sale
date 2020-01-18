"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerService_1 = require("../services/CustomerService");
var logger = require("../helpers/logger");
var CustomerCtrl = /** @class */ (function () {
    function CustomerCtrl() {
    }
    CustomerCtrl.prototype.getCustomer = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, CustomerService_1.default.getCustomerConsolidate(req.params.customer)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(err_1.code).send({ success: err_1.success, data: err_1.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getCeritos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData ceritos] | params : " + req.params.customer);
                        return [4 /*yield*/, CustomerService_1.default.getCeritos(req.params.customer)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        logger.log('error', "[message: error consulta ceritos] | params : " + req.params.customer);
                        res.status(err_2.code).send({ success: err_2.success, data: err_2.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getHistory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData historico de TC] | params : " + req.params.customer);
                        return [4 /*yield*/, CustomerService_1.default.getHistory(req.body.creditCard, req.body.from, req.body.to, req.body.currency)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        logger.log('error', "[message: error consulta historico de TC] | params : " + req.params.customer);
                        res.status(err_3.code).send({ success: err_3.success, data: err_3.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getConsume = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData consumo - consulta de consumos] | params : " + JSON.stringify(req.body));
                        return [4 /*yield*/, CustomerService_1.default.getConsume(req.body.carNumber, req.body.period)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        logger.log('error', "[message: error consulta consumo estado de cuenta] | params : " + JSON.stringify(err_4));
                        res.status(err_4.code).send({ success: err_4.success, data: err_4.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getAccountStatus = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData  - consulta de estados de cuentas] | params : " + JSON.stringify(req.body));
                        return [4 /*yield*/, CustomerService_1.default.getAccountStatus(req.body.carNumber, req.body.period)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        logger.log('error', "[message: request a MasterData  - consulta de estados de cuentas] | params : " + JSON.stringify(err_5));
                        res.status(err_5.code).send({ success: err_5.success, data: err_5.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getAdditional = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData consumo - consulta de TC adicional] | params : " + JSON.stringify(req.body.creditCard));
                        return [4 /*yield*/, CustomerService_1.default.getAdditional(req.body.creditCard)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        logger.log('error', "[message: error consulta de TC adicional] | params : " + JSON.stringify(err_6));
                        res.status(err_6.code).send({ success: err_6.success, data: err_6.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerCtrl.prototype.getCustomerInfo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var creditCard, result, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger.log('info', "[message: request a MasterData] | params : " + req.params.customer);
                        if (!req.body.creditCard) {
                            res.status(401).send({ success: false, data: "El parametro creditCard es requerido." });
                        }
                        creditCard = req.body.creditCard;
                        creditCard = (creditCard.length === 16) ? "000" + creditCard : creditCard;
                        return [4 /*yield*/, CustomerService_1.default.getCustomerInfo(creditCard)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_7 = _a.sent();
                        logger.log('error', "[message: error consulta consolidado de tarjeta de credito] | params : " + req.body.customer);
                        res.status(err_7.code).send({ success: err_7.success, data: err_7.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CustomerCtrl;
}());
exports.CustomerCtrl = CustomerCtrl;
//# sourceMappingURL=CustomerCtrl.js.map