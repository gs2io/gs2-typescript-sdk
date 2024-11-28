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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var WithdrawResult = /** @class */ (function () {
    function WithdrawResult() {
        this.item = null;
        this.withdrawTransactions = null;
    }
    WithdrawResult.prototype.getItem = function () {
        return this.item;
    };
    WithdrawResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawResult.prototype.getWithdrawTransactions = function () {
        return this.withdrawTransactions;
    };
    WithdrawResult.prototype.setWithdrawTransactions = function (withdrawTransactions) {
        this.withdrawTransactions = withdrawTransactions;
        return this;
    };
    WithdrawResult.prototype.withWithdrawTransactions = function (withdrawTransactions) {
        this.withdrawTransactions = withdrawTransactions;
        return this;
    };
    WithdrawResult.fromDict = function (data) {
        return new WithdrawResult()
            .withItem(Gs2Money2.Wallet.fromDict(data["item"]))
            .withWithdrawTransactions(data.withdrawTransactions ?
            data.withdrawTransactions.map(function (item) {
                return Gs2Money2.DepositTransaction.fromDict(item);
            }) : null);
    };
    WithdrawResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "withdrawTransactions": this.getWithdrawTransactions() ?
                this.getWithdrawTransactions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return WithdrawResult;
}());
exports.default = WithdrawResult;
//# sourceMappingURL=WithdrawResult.js.map