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
var DepositTransaction_1 = tslib_1.__importDefault(require("./DepositTransaction"));
var WalletSummary_1 = tslib_1.__importDefault(require("./WalletSummary"));
var DepositEvent = /** @class */ (function () {
    function DepositEvent() {
        this.slot = null;
        this.depositTransactions = null;
        this.status = null;
    }
    DepositEvent.prototype.getSlot = function () {
        return this.slot;
    };
    DepositEvent.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DepositEvent.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DepositEvent.prototype.getDepositTransactions = function () {
        return this.depositTransactions;
    };
    DepositEvent.prototype.setDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    DepositEvent.prototype.withDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    DepositEvent.prototype.getStatus = function () {
        return this.status;
    };
    DepositEvent.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    DepositEvent.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    DepositEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DepositEvent()
            .withSlot(data["slot"])
            .withDepositTransactions(data.depositTransactions ?
            data.depositTransactions.map(function (item) {
                return DepositTransaction_1.default.fromDict(item);
            }) : [])
            .withStatus(WalletSummary_1.default.fromDict(data["status"]));
    };
    DepositEvent.prototype.toDict = function () {
        var _a;
        return {
            "slot": this.getSlot(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions().map(function (item) {
                    return item.toDict();
                }) : [],
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return DepositEvent;
}());
exports.default = DepositEvent;
//# sourceMappingURL=DepositEvent.js.map