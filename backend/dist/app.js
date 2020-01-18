"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var env = require("dotenv");
env.config();
server_1.default.app.listen(3000, function () {
    console.log('Express server listening on port ' + 3000);
});
//# sourceMappingURL=app.js.map