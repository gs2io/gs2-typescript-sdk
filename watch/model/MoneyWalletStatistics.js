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
var MoneyWalletStatistics = /** @class */ (function () {
    function MoneyWalletStatistics() {
        this.deposit = null;
        this.depositAmount = null;
        this.withdraw = null;
        this.withdrawAmount = null;
        this.revenue = null;
    }
    MoneyWalletStatistics.prototype.getDeposit = function () {
        return this.deposit;
    };
    MoneyWalletStatistics.prototype.setDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyWalletStatistics.prototype.withDeposit = function (deposit) {
        this.deposit = deposit;
        return this;
    };
    MoneyWalletStatistics.prototype.getDepositAmount = function () {
        return this.depositAmount;
    };
    MoneyWalletStatistics.prototype.setDepositAmount = function (depositAmount) {
        this.depositAmount = depositAmount;
        return this;
    };
    MoneyWalletStatistics.prototype.withDepositAmount = function (depositAmount) {
        this.depositAmount = depositAmount;
        return this;
    };
    MoneyWalletStatistics.prototype.getWithdraw = function () {
        return this.withdraw;
    };
    MoneyWalletStatistics.prototype.setWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyWalletStatistics.prototype.withWithdraw = function (withdraw) {
        this.withdraw = withdraw;
        return this;
    };
    MoneyWalletStatistics.prototype.getWithdrawAmount = function () {
        return this.withdrawAmount;
    };
    MoneyWalletStatistics.prototype.setWithdrawAmount = function (withdrawAmount) {
        this.withdrawAmount = withdrawAmount;
        return this;
    };
    MoneyWalletStatistics.prototype.withWithdrawAmount = function (withdrawAmount) {
        this.withdrawAmount = withdrawAmount;
        return this;
    };
    MoneyWalletStatistics.prototype.getRevenue = function () {
        return this.revenue;
    };
    MoneyWalletStatistics.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyWalletStatistics.prototype.withRevenue = function (revenue) {
        this.revenue = revenue;
        return this;
    };
    MoneyWalletStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWalletStatistics()
            .withDeposit(data["deposit"])
            .withDepositAmount(data["depositAmount"])
            .withWithdraw(data["withdraw"])
            .withWithdrawAmount(data["withdrawAmount"])
            .withRevenue(data["revenue"]);
    };
    MoneyWalletStatistics.prototype.toDict = function () {
        return {
            "deposit": this.getDeposit(),
            "depositAmount": this.getDepositAmount(),
            "withdraw": this.getWithdraw(),
            "withdrawAmount": this.getWithdrawAmount(),
            "revenue": this.getRevenue(),
        };
    };
    return MoneyWalletStatistics;
}());
exports.default = MoneyWalletStatistics;
//# sourceMappingURL=MoneyWalletStatistics.js.map