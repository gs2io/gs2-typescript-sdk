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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:unused:{currency}";
var UnusedBalance = /** @class */ (function () {
    function UnusedBalance() {
        this.unusedBalanceId = null;
        this.currency = null;
        this.balance = null;
        this.updatedAt = null;
        this.revision = null;
    }
    UnusedBalance.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnusedBalance.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnusedBalance.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnusedBalance.getCurrency = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnusedBalance.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCurrency(grn) == null || this.getCurrency(grn) === '') {
            return false;
        }
        return true;
    };
    UnusedBalance.createGrn = function (region, ownerId, namespaceName, currency) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{currency}', currency !== null && currency !== void 0 ? currency : '');
    };
    UnusedBalance.prototype.getUnusedBalanceId = function () {
        return this.unusedBalanceId;
    };
    UnusedBalance.prototype.setUnusedBalanceId = function (unusedBalanceId) {
        this.unusedBalanceId = unusedBalanceId;
        return this;
    };
    UnusedBalance.prototype.withUnusedBalanceId = function (unusedBalanceId) {
        this.unusedBalanceId = unusedBalanceId;
        return this;
    };
    UnusedBalance.prototype.getCurrency = function () {
        return this.currency;
    };
    UnusedBalance.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    UnusedBalance.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    UnusedBalance.prototype.getBalance = function () {
        return this.balance;
    };
    UnusedBalance.prototype.setBalance = function (balance) {
        this.balance = balance;
        return this;
    };
    UnusedBalance.prototype.withBalance = function (balance) {
        this.balance = balance;
        return this;
    };
    UnusedBalance.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    UnusedBalance.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    UnusedBalance.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    UnusedBalance.prototype.getRevision = function () {
        return this.revision;
    };
    UnusedBalance.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    UnusedBalance.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    UnusedBalance.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnusedBalance()
            .withUnusedBalanceId(data["unusedBalanceId"])
            .withCurrency(data["currency"])
            .withBalance(data["balance"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    UnusedBalance.prototype.toDict = function () {
        return {
            "unusedBalanceId": this.getUnusedBalanceId(),
            "currency": this.getCurrency(),
            "balance": this.getBalance(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return UnusedBalance;
}());
exports.default = UnusedBalance;
//# sourceMappingURL=UnusedBalance.js.map