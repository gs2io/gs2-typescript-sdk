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
var History = /** @class */ (function () {
    function History() {
        this.provider = null;
        this.transactionId = null;
        this.createdAt = null;
        this.revision = null;
    }
    History.isValid = function (grn) {
        return true;
    };
    History.createGrn = function () {
        return grnFormat;
    };
    History.prototype.getProvider = function () {
        return this.provider;
    };
    History.prototype.setProvider = function (provider) {
        this.provider = provider;
        return this;
    };
    History.prototype.withProvider = function (provider) {
        this.provider = provider;
        return this;
    };
    History.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    History.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    History.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    History.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    History.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    History.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    History.prototype.getRevision = function () {
        return this.revision;
    };
    History.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    History.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    History.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new History()
            .withProvider(data["provider"])
            .withTransactionId(data["transactionId"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    History.prototype.toDict = function () {
        return {
            "provider": this.getProvider(),
            "transactionId": this.getTransactionId(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return History;
}());
exports.default = History;
//# sourceMappingURL=History.js.map