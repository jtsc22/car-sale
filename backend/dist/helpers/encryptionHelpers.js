"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var bcrypt = require("bcrypt");
var tweetnacl_1 = require("tweetnacl");
var tweetnacl_util_1 = require("tweetnacl-util");
var EncryptionHelpers = /** @class */ (function () {
    function EncryptionHelpers() {
    }
    EncryptionHelpers.prototype.compare = function (iv, textplain, hashPassword) {
        var key = "apap-IB-Solution";
        var cipher = crypto.createCipheriv("aes-128-cbc", key, Buffer.from(iv, "hex"));
        cipher.update(textplain, "utf8", "base64");
        var hash = cipher.final("base64");
        return hash === hashPassword ? true : false;
    };
    EncryptionHelpers.prototype.decrypt = function (hashPassword, iv) {
        var key = "apap-IB-Solution";
        var cipher = crypto.createDecipheriv("aes-128-cbc", key, Buffer.from(iv, "hex"));
        return cipher.update(hashPassword, "base64", "utf8") + cipher.final("utf8");
    };
    EncryptionHelpers.prototype.sha256 = function (texplain) {
        var hash = crypto
            .createHash("sha256")
            .update(texplain)
            .digest("base64");
        return hash;
    };
    EncryptionHelpers.prototype.compareSha256 = function (textPlain, hashPin) {
        var hash = crypto
            .createHash("sha256")
            .update(textPlain)
            .digest("base64");
        return hash === hashPin ? true : false;
    };
    EncryptionHelpers.prototype.bcryptHash = function (textPlain) {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(textPlain, salt);
    };
    EncryptionHelpers.prototype.bcryptCompare = function (textPlain, hash) {
        return bcrypt.compareSync(textPlain, hash);
    };
    EncryptionHelpers.prototype.generateKeyPairs = function () {
        var keys = tweetnacl_1.box.keyPair();
        return {
            secretKey: tweetnacl_util_1.encodeBase64(keys.secretKey),
            publicKey: tweetnacl_util_1.encodeBase64(keys.publicKey)
        };
    };
    EncryptionHelpers.prototype.encryptNacl = function (messageBox, publicKey, secretKey) {
        var nonce = tweetnacl_1.randomBytes(tweetnacl_1.box.nonceLength);
        var encryptBox = tweetnacl_1.box(tweetnacl_util_1.decodeUTF8(messageBox), nonce, tweetnacl_util_1.decodeBase64(publicKey), //serverKey-publicKey
        tweetnacl_util_1.decodeBase64(secretKey) //clientKey-secretKey
        );
        return {
            box: tweetnacl_util_1.encodeBase64(encryptBox),
            nonce: tweetnacl_util_1.encodeBase64(nonce)
        };
    };
    EncryptionHelpers.prototype.decryptNacl = function (messageBox, nonce, publicKey, //clientKey-publicKey
    secretKey) {
        var decryptBox = tweetnacl_1.box.open(tweetnacl_util_1.decodeBase64(messageBox), tweetnacl_util_1.decodeBase64(nonce), tweetnacl_util_1.decodeBase64(publicKey), tweetnacl_util_1.decodeBase64(secretKey));
        var decodedMessage = tweetnacl_util_1.encodeUTF8(decryptBox);
        return decodedMessage;
    };
    EncryptionHelpers.prototype.generateToken = function () {
        return tweetnacl_util_1.encodeBase64(tweetnacl_1.randomBytes(32));
    };
    EncryptionHelpers.prototype.generateSalt = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 32; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    return EncryptionHelpers;
}());
exports.default = new EncryptionHelpers();
//# sourceMappingURL=encryptionHelpers.js.map