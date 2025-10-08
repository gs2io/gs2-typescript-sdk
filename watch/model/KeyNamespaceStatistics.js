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
var KeyNamespaceStatistics = /** @class */ (function () {
    function KeyNamespaceStatistics() {
        this.encrypt = null;
        this.decrypt = null;
    }
    KeyNamespaceStatistics.prototype.getEncrypt = function () {
        return this.encrypt;
    };
    KeyNamespaceStatistics.prototype.setEncrypt = function (encrypt) {
        this.encrypt = encrypt;
        return this;
    };
    KeyNamespaceStatistics.prototype.withEncrypt = function (encrypt) {
        this.encrypt = encrypt;
        return this;
    };
    KeyNamespaceStatistics.prototype.getDecrypt = function () {
        return this.decrypt;
    };
    KeyNamespaceStatistics.prototype.setDecrypt = function (decrypt) {
        this.decrypt = decrypt;
        return this;
    };
    KeyNamespaceStatistics.prototype.withDecrypt = function (decrypt) {
        this.decrypt = decrypt;
        return this;
    };
    KeyNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceStatistics()
            .withEncrypt(data["encrypt"])
            .withDecrypt(data["decrypt"]);
    };
    KeyNamespaceStatistics.prototype.toDict = function () {
        return {
            "encrypt": this.getEncrypt(),
            "decrypt": this.getDecrypt(),
        };
    };
    return KeyNamespaceStatistics;
}());
exports.default = KeyNamespaceStatistics;
//# sourceMappingURL=KeyNamespaceStatistics.js.map