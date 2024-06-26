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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:transaction:history:daily:{year}:{month}:{day}:currency:{currency}";
var DailyTransactionHistory = /** @class */ (function () {
    function DailyTransactionHistory() {
        this.dailyTransactionHistoryId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.currency = null;
        this.depositAmount = null;
        this.withdrawAmount = null;
        this.updatedAt = null;
        this.revision = null;
    }
    DailyTransactionHistory.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{currency}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.getCurrency = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{currency}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DailyTransactionHistory.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getCurrency(grn) == null || this.getCurrency(grn) === '') {
            return false;
        }
        return true;
    };
    DailyTransactionHistory.createGrn = function (region, ownerId, namespaceName, year, month, day, currency) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{currency}', currency !== null && currency !== void 0 ? currency : '');
    };
    DailyTransactionHistory.prototype.getDailyTransactionHistoryId = function () {
        return this.dailyTransactionHistoryId;
    };
    DailyTransactionHistory.prototype.setDailyTransactionHistoryId = function (dailyTransactionHistoryId) {
        this.dailyTransactionHistoryId = dailyTransactionHistoryId;
        return this;
    };
    DailyTransactionHistory.prototype.withDailyTransactionHistoryId = function (dailyTransactionHistoryId) {
        this.dailyTransactionHistoryId = dailyTransactionHistoryId;
        return this;
    };
    DailyTransactionHistory.prototype.getYear = function () {
        return this.year;
    };
    DailyTransactionHistory.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DailyTransactionHistory.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DailyTransactionHistory.prototype.getMonth = function () {
        return this.month;
    };
    DailyTransactionHistory.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DailyTransactionHistory.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DailyTransactionHistory.prototype.getDay = function () {
        return this.day;
    };
    DailyTransactionHistory.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    DailyTransactionHistory.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    DailyTransactionHistory.prototype.getCurrency = function () {
        return this.currency;
    };
    DailyTransactionHistory.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DailyTransactionHistory.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DailyTransactionHistory.prototype.getDepositAmount = function () {
        return this.depositAmount;
    };
    DailyTransactionHistory.prototype.setDepositAmount = function (depositAmount) {
        this.depositAmount = depositAmount;
        return this;
    };
    DailyTransactionHistory.prototype.withDepositAmount = function (depositAmount) {
        this.depositAmount = depositAmount;
        return this;
    };
    DailyTransactionHistory.prototype.getWithdrawAmount = function () {
        return this.withdrawAmount;
    };
    DailyTransactionHistory.prototype.setWithdrawAmount = function (withdrawAmount) {
        this.withdrawAmount = withdrawAmount;
        return this;
    };
    DailyTransactionHistory.prototype.withWithdrawAmount = function (withdrawAmount) {
        this.withdrawAmount = withdrawAmount;
        return this;
    };
    DailyTransactionHistory.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    DailyTransactionHistory.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DailyTransactionHistory.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DailyTransactionHistory.prototype.getRevision = function () {
        return this.revision;
    };
    DailyTransactionHistory.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DailyTransactionHistory.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DailyTransactionHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DailyTransactionHistory()
            .withDailyTransactionHistoryId(data["dailyTransactionHistoryId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withCurrency(data["currency"])
            .withDepositAmount(data["depositAmount"])
            .withWithdrawAmount(data["withdrawAmount"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    DailyTransactionHistory.prototype.toDict = function () {
        return {
            "dailyTransactionHistoryId": this.getDailyTransactionHistoryId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "currency": this.getCurrency(),
            "depositAmount": this.getDepositAmount(),
            "withdrawAmount": this.getWithdrawAmount(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return DailyTransactionHistory;
}());
exports.default = DailyTransactionHistory;
//# sourceMappingURL=DailyTransactionHistory.js.map