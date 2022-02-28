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
var grnFormat = "";
var Identifier = /** @class */ (function () {
    function Identifier() {
        this.clientId = null;
        this.userName = null;
        this.clientSecret = null;
        this.createdAt = null;
    }
    Identifier.isValid = function (grn) {
        return true;
    };
    Identifier.createGrn = function () {
        return grnFormat;
    };
    Identifier.prototype.getClientId = function () {
        return this.clientId;
    };
    Identifier.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    Identifier.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    Identifier.prototype.getUserName = function () {
        return this.userName;
    };
    Identifier.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Identifier.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Identifier.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    Identifier.prototype.setClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    Identifier.prototype.withClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    Identifier.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Identifier.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Identifier.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Identifier.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Identifier()
            .withClientId(data["clientId"])
            .withUserName(data["userName"])
            .withClientSecret(data["clientSecret"])
            .withCreatedAt(data["createdAt"]);
    };
    Identifier.prototype.toDict = function () {
        return {
            "clientId": this.getClientId(),
            "userName": this.getUserName(),
            "clientSecret": this.getClientSecret(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Identifier;
}());
exports.default = Identifier;
//# sourceMappingURL=Identifier.js.map