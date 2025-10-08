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
var MoneyWalletDistributions = /** @class */ (function () {
    function MoneyWalletDistributions() {
        this.free = null;
        this.paid = null;
    }
    MoneyWalletDistributions.prototype.getFree = function () {
        return this.free;
    };
    MoneyWalletDistributions.prototype.setFree = function (free) {
        this.free = free;
        return this;
    };
    MoneyWalletDistributions.prototype.withFree = function (free) {
        this.free = free;
        return this;
    };
    MoneyWalletDistributions.prototype.getPaid = function () {
        return this.paid;
    };
    MoneyWalletDistributions.prototype.setPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    MoneyWalletDistributions.prototype.withPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    MoneyWalletDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWalletDistributions()
            .withFree(Gs2Watch.MoneyWalletFreeDistribution.fromDict(data["free"]))
            .withPaid(Gs2Watch.MoneyWalletPaidDistribution.fromDict(data["paid"]));
    };
    MoneyWalletDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "free": (_a = this.getFree()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "paid": (_b = this.getPaid()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MoneyWalletDistributions;
}());
exports.default = MoneyWalletDistributions;
//# sourceMappingURL=MoneyWalletDistributions.js.map