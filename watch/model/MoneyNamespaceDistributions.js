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
var MoneyNamespaceDistributions = /** @class */ (function () {
    function MoneyNamespaceDistributions() {
        this.verification = null;
        this.deposit = null;
        this.withdraw = null;
        this.revenue = null;
    }
    MoneyNamespaceDistributions.prototype.getVerification = function () {
        return this.verification;
    };
    MoneyNamespaceDistributions.prototype.setVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyNamespaceDistributions.prototype.withVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyNamespaceDistributions.prototype.getDeposit = function () {
        return this.deposit;
    };
    MoneyNamespaceDistributions.prototype.setDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyNamespaceDistributions.prototype.withDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyNamespaceDistributions.prototype.getWithdraw = function () {
        return this.withdraw;
    };
    MoneyNamespaceDistributions.prototype.setWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyNamespaceDistributions.prototype.withWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyNamespaceDistributions.prototype.getRevenue = function () {
        return this.revenue;
    };
    MoneyNamespaceDistributions.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyNamespaceDistributions.prototype.withRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceDistributions()
            .withVerification(Gs2Watch.MoneyNamespaceVerificationDistribution.fromDict(data["verification"]))
            .withDeposit(Gs2Watch.MoneyNamespaceDepositDistribution.fromDict(data["deposit"]))
            .withWithdraw(Gs2Watch.MoneyNamespaceWithdrawDistribution.fromDict(data["withdraw"]))
            .withRevenue(Gs2Watch.MoneyNamespaceRevenueDistribution.fromDict(data["revenue"]));
    };
    MoneyNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "verification": (_a = this.getVerification()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "deposit": (_b = this.getDeposit()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "withdraw": (_c = this.getWithdraw()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "revenue": (_d = this.getRevenue()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return MoneyNamespaceDistributions;
}());
exports.default = MoneyNamespaceDistributions;
//# sourceMappingURL=MoneyNamespaceDistributions.js.map