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
var DepositTransaction = /** @class */ (function () {
    function DepositTransaction() {
        this.price = null;
        this.currency = null;
        this.count = null;
        this.depositedAt = null;
    }
    DepositTransaction.prototype.getPrice = function () {
        return this.price;
    };
    DepositTransaction.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    DepositTransaction.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    DepositTransaction.prototype.getCurrency = function () {
        return this.currency;
    };
    DepositTransaction.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DepositTransaction.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DepositTransaction.prototype.getCount = function () {
        return this.count;
    };
    DepositTransaction.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DepositTransaction.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DepositTransaction.prototype.getDepositedAt = function () {
        return this.depositedAt;
    };
    DepositTransaction.prototype.setDepositedAt = function (depositedAt) {
        this.depositedAt = depositedAt;
        return this;
    };
    DepositTransaction.prototype.withDepositedAt = function (depositedAt) {
        this.depositedAt = depositedAt;
        return this;
    };
    DepositTransaction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DepositTransaction()
            .withPrice(data["price"])
            .withCurrency(data["currency"])
            .withCount(data["count"])
            .withDepositedAt(data["depositedAt"]);
    };
    DepositTransaction.prototype.toDict = function () {
        return {
            "price": this.getPrice(),
            "currency": this.getCurrency(),
            "count": this.getCount(),
            "depositedAt": this.getDepositedAt(),
        };
    };
    return DepositTransaction;
}());
exports.default = DepositTransaction;
//# sourceMappingURL=DepositTransaction.js.map