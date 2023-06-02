"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var KeyNamespaceEncryptDistribution_1 = tslib_1.__importDefault(require("./KeyNamespaceEncryptDistribution"));
var KeyNamespaceDecryptDistribution_1 = tslib_1.__importDefault(require("./KeyNamespaceDecryptDistribution"));
var KeyNamespaceDistributions = /** @class */ (function () {
    function KeyNamespaceDistributions() {
        this.encrypt = null;
        this.decrypt = null;
    }
    KeyNamespaceDistributions.prototype.getEncrypt = function () {
        return this.encrypt;
    };
    KeyNamespaceDistributions.prototype.setEncrypt = function (encrypt) {
        this.encrypt = encrypt;
        return this;
    };
    KeyNamespaceDistributions.prototype.withEncrypt = function (encrypt) {
        this.encrypt = encrypt;
        return this;
    };
    KeyNamespaceDistributions.prototype.getDecrypt = function () {
        return this.decrypt;
    };
    KeyNamespaceDistributions.prototype.setDecrypt = function (decrypt) {
        this.decrypt = decrypt;
        return this;
    };
    KeyNamespaceDistributions.prototype.withDecrypt = function (decrypt) {
        this.decrypt = decrypt;
        return this;
    };
    KeyNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceDistributions()
            .withEncrypt(KeyNamespaceEncryptDistribution_1.default.fromDict(data["encrypt"]))
            .withDecrypt(KeyNamespaceDecryptDistribution_1.default.fromDict(data["decrypt"]));
    };
    KeyNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "encrypt": (_a = this.getEncrypt()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "decrypt": (_b = this.getDecrypt()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return KeyNamespaceDistributions;
}());
exports.default = KeyNamespaceDistributions;
//# sourceMappingURL=KeyNamespaceDistributions.js.map