"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var store = require("store");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, label = winston_1.format.label, prettyPrint = winston_1.format.prettyPrint;
var logger = winston_1.createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize({ all: true }))
        })
    ]
});
winston_1.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'cyan'
});
function log(level, message, requestId) {
    return logger.log({
        request_id: store.get("request_id"),
        level: level,
        origin: "micro-md-customer",
        description: "",
        message: JSON.stringify(message)
    });
}
exports.log = log;
function maskInfo(key, value) {
    var maskKeys = "xxxxxxxx";
    var maskedValue = value;
    // console.log(key)
    if (value.length === 16) {
        if (value && value.length > 5) {
            // maskedValue = "*" + maskedValue.substring(value.length - 4, value.substring(12, 16));
            maskedValue = maskedValue.substring(0, 4) + maskKeys + maskedValue.substring(12, 16);
        }
        else {
            maskedValue = "****";
        }
    }
    return maskedValue;
}
exports.maskInfo = maskInfo;
//# sourceMappingURL=logger.js.map