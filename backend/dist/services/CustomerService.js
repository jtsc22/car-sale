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
var axios_1 = require("axios");
var https = require("https");
var fs = require("fs");
var vpsclienteRepository_1 = require("../repositories/vpsclienteRepository");
var logger = require("../helpers/logger");
var _ = require("lodash");
var store = require("store");
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.httpsAgent = new https.Agent({ keepAlive: true, ca: fs.readFileSync("./CA.crt") });
        this.request = {
            method: 'POST',
            timeout: 10000,
            url: process.env.URL_CREDIT_CARD_INFO,
            data: { merchantNumber: "123456789" },
            headers: { "Content-Type": "application/json", "request_id": store.get('request_id') },
            httpsAgent: this.httpsAgent
        };
    }
    CustomerService.prototype.getCustomerConsolidate = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, data, success, start_1, e_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        start = Date.now();
                        query = "UP_SEL_WS_MOBILE_CONSOLIDADO_CLIENTE '" + customer + "'";
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 1:
                        result = _a.sent();
                        if (!(result.length > 0)) return [3 /*break*/, 6];
                        data = void 0;
                        success = true;
                        logger.log('info', {
                            customer: customer,
                            service: "micro-core-customer / consulta de consolidado de productos de TC - MASTERDATA",
                            params: "UP_SEL_WS_MOBILE_CONSOLIDADO_CLIENTE " + customer,
                            count: _.size(result),
                            time: Date.now() - start + "ms",
                            status: 200,
                            statusText: "Ok",
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        start_1 = Date.now();
                        return [4 /*yield*/, this.updateTcBalance(result)];
                    case 3:
                        data = _a.sent();
                        logger.log('info', {
                            customer: customer,
                            service: "micro-card-information / actualizar balance disponible en linea a traves del WSDL de FirstData ",
                            params: JSON.stringify(this.request.data, logger.maskInfo),
                            status: 200,
                            statusText: "Ok",
                            time: Date.now() - start_1 + "ms"
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (e_1.response) {
                            logger.log('error', {
                                customer: customer,
                                service: "micro-card-information / actualizar balance disponible en linea a traves del WSDL de FirstData ",
                                method: e_1.config.method,
                                url: e_1.config.url,
                                params: JSON.stringify(JSON.parse(e_1.config.data, logger.maskInfo)),
                                status: e_1.response.status,
                                statusText: e_1.response.statusText,
                                error: e_1.response.data
                            });
                            data = result;
                            success = true;
                        }
                        else {
                            logger.log('error', {
                                customer: customer,
                                service: "micro-card-information / actualizar balance disponible en linea a traves del WSDL de FirstData ",
                                params: "" + customer,
                                status: 0,
                                statusText: "Error",
                                error: e_1.message,
                            });
                            data = result;
                            success = true;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, { success: success, code: 200, data: data }];
                    case 6:
                        logger.log('error', {
                            customer: customer,
                            service: "micro-core-customer / consulta de consolidado de productos de TC - MASTERDATA",
                            params: "UP_SEL_WS_MOBILE_CONSOLIDADO_CLIENTE " + customer,
                            status: 404,
                            statusText: "Not Found",
                        });
                        return [2 /*return*/, { success: false, code: 200, message: "no se encontraron resultados", data: [] }];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        logger.log('error', {
                            customer: customer,
                            service: "micro-core-customer / consulta de consolidado de productos de TC - MASTERDATA",
                            params: "" + customer,
                            status: 500,
                            statusText: "Error",
                            error: err_1.message,
                        });
                        return [2 /*return*/, { success: false, code: 500, data: err_1.message }];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.updateTcBalance = function (creditCards) {
        return __awaiter(this, void 0, void 0, function () {
            var creditCardsArray, index, tc, requestDOP, requestUSD, dataDOP, dataUSD;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        creditCardsArray = [];
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < creditCards.length)) return [3 /*break*/, 6];
                        tc = Object.assign({}, creditCards[index]);
                        requestDOP = Object.assign({}, this.request);
                        requestUSD = Object.assign({}, this.request);
                        requestDOP.data.cardNumber = tc.PV_NUMEROTARJETA;
                        requestDOP.data.org = tc.PN_ORGRD;
                        return [4 /*yield*/, axios_1.default(requestDOP)];
                    case 2:
                        dataDOP = _a.sent();
                        tc.PN_CREDITO_DISPONIBLERD = Number(dataDOP.data.AvailableCredit);
                        requestUSD.data.cardNumber = tc.PV_NUMEROTARJETA;
                        if (!(tc.PN_ORGUS !== null)) return [3 /*break*/, 4];
                        requestUSD.data.org = tc.PN_ORGUS;
                        return [4 /*yield*/, axios_1.default(requestUSD)];
                    case 3:
                        dataUSD = _a.sent();
                        tc.PN_CREDITO_DISPONIBLEUS = Number(dataUSD.data.AvailableCredit);
                        _a.label = 4;
                    case 4:
                        creditCardsArray.push(tc);
                        _a.label = 5;
                    case 5:
                        index++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, creditCardsArray];
                }
            });
        });
    };
    CustomerService.prototype.getCustomerInfo = function (creditCard) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        query = "\n            SELECT TOP 1 cte.numcliente,  \n            RTRIM(LTRIM(cte.frst_name)) first_name, \n            RTRIM(LTRIM(cte.lst_name)) last_name, \n            CASE WHEN cta.org = '323' THEN 'DOP' ELSE 'USD' END currency,\n            CASE WHEN RTRIM(LTRIM(cte.ssan_flag)) = '0' THEN RIGHT(LTRIM(RTRIM(REPLICATE('0', 9) + cte.ssan)), 9) \n            WHEN RTRIM(LTRIM(cte.ssan_flag)) = '1' THEN RIGHT(LTRIM(RTRIM(REPLICATE('0', 11) + cte.ssan)), 11) \n            ELSE substring(cte.ssan, patindex('%[^0]%',cte.ssan), LEN(cte.ssan) + 1 - (patindex('%[^0]%',cte.ssan))) END identification,\n            RTRIM(LTRIM(cte.ssan_flag)) doc_type, '' ESTADO FROM vpsplastico pco \n            INNER JOIN vpscuenta cta ON pco.numcuenta = cta.numcuenta \n            INNER JOIN vpscliente cte ON cte.numcliente = cta.numcliente WHERE pco.numtarjeta = '" + creditCard + "'";
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        result = _a.sent();
                        if (result.length > 0) {
                            return [2 /*return*/, { success: true, code: 200, data: result }];
                        }
                        else {
                            logger.log('error', "[message: no se encontraron resultados] :   time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 200, message: "no se encontraron resultados", data: [] }];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        logger.log('error', "[message: error : " + err_2.message + " : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_2.message }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getCeritos = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        query = "UP_SEL_CONSULTA_CERITOS_T24 '" + customer + "'";
                        logger.log('info', "[message: consulta de ceritos]  : " + query);
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        result = _a.sent();
                        if (_.isEmpty(result)) {
                            logger.log('error', "[message: No se encontraron ceritos] : time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 400, data: "No se encontraron ceritos" }];
                        }
                        // logger.log('info', `[message: consulta de cerito] | resultados de la consulta : ${Object.keys(result)}`)
                        return [2 /*return*/, { success: true, code: 200, data: result }];
                    case 3:
                        err_3 = _a.sent();
                        logger.log('error', "[message: consulta de cerito] : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_3.message }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getAdditional = function (creditCard) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        query = "SPC_GET_CONSULTA_ADICIONALES_CLIENTE_T24 '" + creditCard + "'";
                        logger.log('info', "[message: consulta de TC adicional]  : SPC_GET_CONSULTA_ADICIONALES_CLIENTE_T24 '" + this.maskTcNumber(creditCard) + "'");
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        result = _a.sent();
                        if (_.isEmpty(result)) {
                            logger.log('error', "[message: No se encontraron TC adicionales] : time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 400, data: "No se encontraron TC adicionales" }];
                        }
                        // logger.log('info', `[message: consulta de TC adicional] | resultados de la consulta : ${Object.keys(result)}`)
                        return [2 /*return*/, { success: true, code: 200, data: result }];
                    case 3:
                        err_4 = _a.sent();
                        logger.log('error', "[message: consulta de TC adicional] : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_4.message }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getHistory = function (numtarjeta, from, to, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, resultDop, resultUsd, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        query = "UP_SEL_WS_MOBILE_MOVIMIENTOS_RANGO '" + numtarjeta + "', '" + from + "', '" + to + "', '1' ";
                        logger.log('info', "[message: consulta historico DOP]  : " + ("UP_SEL_WS_MOBILE_MOVIMIENTOS_RANGO '" + this.maskTcNumber(numtarjeta) + "', '" + from + "', '" + to + "', '1' "));
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        resultDop = _a.sent();
                        query = "UP_SEL_WS_MOBILE_MOVIMIENTOS_RANGO '" + numtarjeta + "', '" + from + "', '" + to + "', '2' ";
                        logger.log('info', "[message: consulta historico USD]  : " + ("UP_SEL_WS_MOBILE_MOVIMIENTOS_RANGO '" + this.maskTcNumber(numtarjeta) + "', '" + from + "', '" + to + "', '2' "));
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 3:
                        resultUsd = _a.sent();
                        if (_.isEmpty(resultDop) && _.isEmpty(resultUsd)) {
                            logger.log('error', "[message: No hay registros historicos de TC] : time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 400, data: "No hay registros historicos de TC" }];
                        }
                        // logger.log('info', `[message: consulta historico TC | resultados de la consulta DOP: ${Object.keys(resultDop)}`);
                        // logger.log('info', `[message: consulta historico TC | resultados de la consulta USD: ${Object.keys(resultUsd)}`)
                        return [2 /*return*/, { success: true, code: 200, data: { dop: resultDop, usd: resultUsd } }];
                    case 4:
                        err_5 = _a.sent();
                        logger.log('error', "[message: consulta historico de TC] : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_5.message }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getConsume = function (numtarjeta, period) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, merchant_1, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        query = "UP_SEL_WS_MOBILE_MERCHANT_CONSUMOS '" + numtarjeta + "', " + period;
                        logger.log('info', "[message: consulta consumos - estado de cuenta]  : UP_SEL_WS_MOBILE_MERCHANT_CONSUMOS '" + this.maskTcNumber(numtarjeta) + "', " + period);
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        result = _a.sent();
                        merchant_1 = [];
                        result.forEach(function (element) {
                            merchant_1.push(element.PI_CATEGORIA);
                        });
                        if (_.isEmpty(result)) {
                            logger.log('error', "[message: No hay registros de consumos - estado de cuenta] : time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 400, data: "No hay registros de consumos" }];
                        }
                        //logger.log('info', `[message: registros de consumos - estado de cuenta : ${Object.keys(result)}`)
                        return [2 /*return*/, { success: true, code: 200, data: merchant_1 }];
                    case 3:
                        err_6 = _a.sent();
                        logger.log('error', "[message: registros de consumos - estado de cuenta] : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_6.message }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getAccountStatus = function (numtarjeta, period) {
        return __awaiter(this, void 0, void 0, function () {
            var start, query, result, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        query = "UP_SEL_WS_MOBILE_ULTIMOS_ESTADOS_CUENTA '" + numtarjeta + "', '" + period + "'";
                        logger.log('info', "[message: consulta ultimos - estado de cuenta]  : UP_SEL_WS_MOBILE_ULTIMOS_ESTADOS_CUENTA '" + this.maskTcNumber(numtarjeta) + "', '" + period + "'");
                        return [4 /*yield*/, vpsclienteRepository_1.default.executeQuery(query)];
                    case 2:
                        result = _a.sent();
                        if (_.isEmpty(result)) {
                            logger.log('error', "[message: No hay registros - estado de cuenta] : time : " + (Date.now() - start) + "ms");
                            return [2 /*return*/, { success: false, code: 400, data: "No se encontraron registros" }];
                        }
                        //logger.log('info', `[message: registros de consumos - estado de cuenta : ${Object.keys(result)}`)
                        return [2 /*return*/, { success: true, code: 200, data: result }];
                    case 3:
                        err_7 = _a.sent();
                        logger.log('error', "[message: registros - estado de cuenta] : time : " + (Date.now() - start) + "ms");
                        return [2 /*return*/, { success: false, code: 500, data: err_7.message }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.maskTcNumber = function (tcNumber) {
        var maskKeys = "xxxxxxxx";
        if (tcNumber) {
            return (tcNumber.length == 16) ? (tcNumber.substring(0, 4) + maskKeys + tcNumber.substring(12, 16)) : tcNumber;
        }
    };
    return CustomerService;
}());
exports.default = new CustomerService();
//# sourceMappingURL=CustomerService.js.map