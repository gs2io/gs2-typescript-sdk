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
var Receipt = /** @class */ (function () {
    function Receipt() {
        this.store = null;
        this.transactionID = null;
        this.payload = null;
    }
    Receipt.prototype.getStore = function () {
        return this.store;
    };
    Receipt.prototype.setStore = function (store) {
        this.store = store;
        return this;
    };
    Receipt.prototype.withStore = function (store) {
        this.store = store;
        return this;
    };
    Receipt.prototype.getTransactionID = function () {
        return this.transactionID;
    };
    Receipt.prototype.setTransactionID = function (transactionID) {
        this.transactionID = transactionID;
        return this;
    };
    Receipt.prototype.withTransactionID = function (transactionID) {
        this.transactionID = transactionID;
        return this;
    };
    Receipt.prototype.getPayload = function () {
        return this.payload;
    };
    Receipt.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    Receipt.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    Receipt.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withStore(data["Store"])
            .withTransactionID(data["TransactionID"])
            .withPayload(data["Payload"]);
    };
    Receipt.prototype.toDict = function () {
        return {
            "Store": this.getStore(),
            "TransactionID": this.getTransactionID(),
            "Payload": this.getPayload(),
        };
    };
    return Receipt;
}());
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map