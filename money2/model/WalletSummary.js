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
var WalletSummary = /** @class */ (function () {
    function WalletSummary() {
        this.paid = null;
        this.free = null;
        this.total = null;
    }
    WalletSummary.prototype.getPaid = function () {
        return this.paid;
    };
    WalletSummary.prototype.setPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    WalletSummary.prototype.withPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    WalletSummary.prototype.getFree = function () {
        return this.free;
    };
    WalletSummary.prototype.setFree = function (free) {
        this.free = free;
        return this;
    };
    WalletSummary.prototype.withFree = function (free) {
        this.free = free;
        return this;
    };
    WalletSummary.prototype.getTotal = function () {
        return this.total;
    };
    WalletSummary.prototype.setTotal = function (total) {
        this.total = total;
        return this;
    };
    WalletSummary.prototype.withTotal = function (total) {
        this.total = total;
        return this;
    };
    WalletSummary.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new WalletSummary()
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withTotal(data["total"]);
    };
    WalletSummary.prototype.toDict = function () {
        return {
            "paid": this.getPaid(),
            "free": this.getFree(),
            "total": this.getTotal(),
        };
    };
    return WalletSummary;
}());
exports.default = WalletSummary;
//# sourceMappingURL=WalletSummary.js.map