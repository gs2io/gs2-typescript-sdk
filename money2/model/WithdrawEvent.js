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
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var WithdrawEvent = /** @class */ (function () {
    function WithdrawEvent() {
        this.slot = null;
        this.withdrawDetails = null;
        this.status = null;
    }
    WithdrawEvent.prototype.getSlot = function () {
        return this.slot;
    };
    WithdrawEvent.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawEvent.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawEvent.prototype.getWithdrawDetails = function () {
        return this.withdrawDetails;
    };
    WithdrawEvent.prototype.setWithdrawDetails = function (withdrawDetails) {
        this.withdrawDetails = withdrawDetails;
        return this;
    };
    WithdrawEvent.prototype.withWithdrawDetails = function (withdrawDetails) {
        this.withdrawDetails = withdrawDetails;
        return this;
    };
    WithdrawEvent.prototype.getStatus = function () {
        return this.status;
    };
    WithdrawEvent.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    WithdrawEvent.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    WithdrawEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new WithdrawEvent()
            .withSlot(data["slot"])
            .withWithdrawDetails(data.withdrawDetails ?
            data.withdrawDetails.map(function (item) {
                return Gs2Money2.DepositTransaction.fromDict(item);
            }) : null)
            .withStatus(Gs2Money2.WalletSummary.fromDict(data["status"]));
    };
    WithdrawEvent.prototype.toDict = function () {
        var _a;
        return {
            "slot": this.getSlot(),
            "withdrawDetails": this.getWithdrawDetails() ?
                this.getWithdrawDetails().map(function (item) {
                    return item.toDict();
                }) : null,
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return WithdrawEvent;
}());
exports.default = WithdrawEvent;
//# sourceMappingURL=WithdrawEvent.js.map