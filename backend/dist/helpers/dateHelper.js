"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.prototype.getDateDiffMinutes = function (date1, date2) {
        var dateStart = new Date(this.formateDateTime(date1));
        var dateEnd = new Date(date2);
        return (Math.abs(dateStart - dateEnd) / 1000) / 60;
    };
    DateHelper.prototype.formateDateTime = function (date) {
        return new Date(moment(date).utcOffset('+0000').format("YYYY-MM-DD HH:mm:ss"));
    };
    DateHelper.prototype.getCurrentDateTime = function () {
        return new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
    };
    return DateHelper;
}());
exports.default = new DateHelper();
//# sourceMappingURL=dateHelper.js.map