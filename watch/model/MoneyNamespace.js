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
var MoneyStatistics_1 = tslib_1.__importDefault(require("./MoneyStatistics"));
var MoneyBalanceDistribution_1 = tslib_1.__importDefault(require("./MoneyBalanceDistribution"));
var MoneyBillingDistribution_1 = tslib_1.__importDefault(require("./MoneyBillingDistribution"));
var MoneyNamespace = /** @class */ (function () {
    function MoneyNamespace() {
        this.namespaceName = null;
        this.statistics = null;
        this.balanceDistribution = null;
        this.billingDistribution = null;
    }
    MoneyNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MoneyNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MoneyNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MoneyNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    MoneyNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyNamespace.prototype.getBalanceDistribution = function () {
        return this.balanceDistribution;
    };
    MoneyNamespace.prototype.setBalanceDistribution = function (balanceDistribution) {
        this.balanceDistribution = balanceDistribution;
        return this;
    };
    MoneyNamespace.prototype.withBalanceDistribution = function (balanceDistribution) {
        this.balanceDistribution = balanceDistribution;
        return this;
    };
    MoneyNamespace.prototype.getBillingDistribution = function () {
        return this.billingDistribution;
    };
    MoneyNamespace.prototype.setBillingDistribution = function (billingDistribution) {
        this.billingDistribution = billingDistribution;
        return this;
    };
    MoneyNamespace.prototype.withBillingDistribution = function (billingDistribution) {
        this.billingDistribution = billingDistribution;
        return this;
    };
    MoneyNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespace()
            .withNamespaceName(data["namespaceName"])
            .withStatistics(MoneyStatistics_1.default.fromDict(data["statistics"]))
            .withBalanceDistribution(data.balanceDistribution ?
            data.balanceDistribution.map(function (item) {
                return MoneyBalanceDistribution_1.default.fromDict(item);
            }) : [])
            .withBillingDistribution(data.billingDistribution ?
            data.billingDistribution.map(function (item) {
                return MoneyBillingDistribution_1.default.fromDict(item);
            }) : []);
    };
    MoneyNamespace.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "balanceDistribution": this.getBalanceDistribution() ?
                this.getBalanceDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
            "billingDistribution": this.getBillingDistribution() ?
                this.getBillingDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return MoneyNamespace;
}());
exports.default = MoneyNamespace;
//# sourceMappingURL=MoneyNamespace.js.map