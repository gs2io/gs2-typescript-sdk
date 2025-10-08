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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var ExchangeNamespaceDistributions = /** @class */ (function () {
    function ExchangeNamespaceDistributions() {
        this.exchange = null;
        this.exchangeAmount = null;
        this.exchangeByUser = null;
        this.exchangeAmountByUser = null;
    }
    ExchangeNamespaceDistributions.prototype.getExchange = function () {
        return this.exchange;
    };
    ExchangeNamespaceDistributions.prototype.setExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.withExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.getExchangeAmount = function () {
        return this.exchangeAmount;
    };
    ExchangeNamespaceDistributions.prototype.setExchangeAmount = function (exchangeAmount) {
        this.exchangeAmount = exchangeAmount;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.withExchangeAmount = function (exchangeAmount) {
        this.exchangeAmount = exchangeAmount;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.getExchangeByUser = function () {
        return this.exchangeByUser;
    };
    ExchangeNamespaceDistributions.prototype.setExchangeByUser = function (exchangeByUser) {
        this.exchangeByUser = exchangeByUser;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.withExchangeByUser = function (exchangeByUser) {
        this.exchangeByUser = exchangeByUser;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.getExchangeAmountByUser = function () {
        return this.exchangeAmountByUser;
    };
    ExchangeNamespaceDistributions.prototype.setExchangeAmountByUser = function (exchangeAmountByUser) {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    };
    ExchangeNamespaceDistributions.prototype.withExchangeAmountByUser = function (exchangeAmountByUser) {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    };
    ExchangeNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceDistributions()
            .withExchange(Gs2Watch.ExchangeNamespaceExchangeDistribution.fromDict(data["exchange"]))
            .withExchangeAmount(Gs2Watch.ExchangeNamespaceExchangeAmountDistribution.fromDict(data["exchangeAmount"]))
            .withExchangeByUser(Gs2Watch.ExchangeNamespaceExchangeByUserDistribution.fromDict(data["exchangeByUser"]))
            .withExchangeAmountByUser(Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution.fromDict(data["exchangeAmountByUser"]));
    };
    ExchangeNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "exchange": (_a = this.getExchange()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "exchangeAmount": (_b = this.getExchangeAmount()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "exchangeByUser": (_c = this.getExchangeByUser()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "exchangeAmountByUser": (_d = this.getExchangeAmountByUser()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return ExchangeNamespaceDistributions;
}());
exports.default = ExchangeNamespaceDistributions;
//# sourceMappingURL=ExchangeNamespaceDistributions.js.map