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
var UserDataEntry = /** @class */ (function () {
    function UserDataEntry() {
        this.service = null;
        this.namespaceName = null;
        this.kind = null;
        this.payload = null;
    }
    UserDataEntry.prototype.getService = function () {
        return this.service;
    };
    UserDataEntry.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    UserDataEntry.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    UserDataEntry.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UserDataEntry.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UserDataEntry.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UserDataEntry.prototype.getKind = function () {
        return this.kind;
    };
    UserDataEntry.prototype.setKind = function (kind) {
        this.kind = kind;
        return this;
    };
    UserDataEntry.prototype.withKind = function (kind) {
        this.kind = kind;
        return this;
    };
    UserDataEntry.prototype.getPayload = function () {
        return this.payload;
    };
    UserDataEntry.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UserDataEntry.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UserDataEntry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UserDataEntry()
            .withService(data["service"])
            .withNamespaceName(data["namespaceName"])
            .withKind(data["kind"])
            .withPayload(data["payload"]);
    };
    UserDataEntry.prototype.toDict = function () {
        return {
            "service": this.getService(),
            "namespaceName": this.getNamespaceName(),
            "kind": this.getKind(),
            "payload": this.getPayload(),
        };
    };
    return UserDataEntry;
}());
exports.default = UserDataEntry;
//# sourceMappingURL=UserDataEntry.js.map