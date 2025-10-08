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
var ExchangeNamespaceStatistics = /** @class */ (function () {
    function ExchangeNamespaceStatistics() {
        this.exchange = null;
        this.amount = null;
    }
    ExchangeNamespaceStatistics.prototype.getExchange = function () {
        return this.exchange;
    };
    ExchangeNamespaceStatistics.prototype.setExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    ExchangeNamespaceStatistics.prototype.withExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    ExchangeNamespaceStatistics.prototype.getAmount = function () {
        return this.amount;
    };
    ExchangeNamespaceStatistics.prototype.setAmount = function (amount) {
        this.amount = amount;
        return this;
    };
    ExchangeNamespaceStatistics.prototype.withAmount = function (amount) {
        this.amount = amount;
        return this;
    };
    ExchangeNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceStatistics()
            .withExchange(data["exchange"])
            .withAmount(data["amount"]);
    };
    ExchangeNamespaceStatistics.prototype.toDict = function () {
        return {
            "exchange": this.getExchange(),
            "amount": this.getAmount(),
        };
    };
    return ExchangeNamespaceStatistics;
}());
exports.default = ExchangeNamespaceStatistics;
//# sourceMappingURL=ExchangeNamespaceStatistics.js.map