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
var MoneyNamespaceStatistics = /** @class */ (function () {
    function MoneyNamespaceStatistics() {
        this.verification = null;
        this.deposit = null;
        this.withdraw = null;
        this.revenue = null;
    }
    MoneyNamespaceStatistics.prototype.getVerification = function () {
        return this.verification;
    };
    MoneyNamespaceStatistics.prototype.setVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyNamespaceStatistics.prototype.withVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyNamespaceStatistics.prototype.getDeposit = function () {
        return this.deposit;
    };
    MoneyNamespaceStatistics.prototype.setDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyNamespaceStatistics.prototype.withDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyNamespaceStatistics.prototype.getWithdraw = function () {
        return this.withdraw;
    };
    MoneyNamespaceStatistics.prototype.setWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyNamespaceStatistics.prototype.withWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyNamespaceStatistics.prototype.getRevenue = function () {
        return this.revenue;
    };
    MoneyNamespaceStatistics.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyNamespaceStatistics.prototype.withRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceStatistics()
            .withVerification(data["verification"])
            .withDeposit(data["deposit"])
            .withWithdraw(data["withdraw"])
            .withRevenue(data["revenue"]);
    };
    MoneyNamespaceStatistics.prototype.toDict = function () {
        return {
            "verification": this.getVerification(),
            "deposit": this.getDeposit(),
            "withdraw": this.getWithdraw(),
            "revenue": this.getRevenue(),
        };
    };
    return MoneyNamespaceStatistics;
}());
exports.default = MoneyNamespaceStatistics;
//# sourceMappingURL=MoneyNamespaceStatistics.js.map