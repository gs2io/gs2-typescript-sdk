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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:refundHistory:{transactionId}";
var RefundHistory = /** @class */ (function () {
    function RefundHistory() {
        this.refundHistoryId = null;
        this.transactionId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.userId = null;
        this.detail = null;
        this.createdAt = null;
    }
    RefundHistory.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RefundHistory.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RefundHistory.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RefundHistory.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RefundHistory.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    RefundHistory.createGrn = function (region, ownerId, namespaceName, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    RefundHistory.prototype.getRefundHistoryId = function () {
        return this.refundHistoryId;
    };
    RefundHistory.prototype.setRefundHistoryId = function (refundHistoryId) {
        this.refundHistoryId = refundHistoryId;
        return this;
    };
    RefundHistory.prototype.withRefundHistoryId = function (refundHistoryId) {
        this.refundHistoryId = refundHistoryId;
        return this;
    };
    RefundHistory.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    RefundHistory.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    RefundHistory.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    RefundHistory.prototype.getYear = function () {
        return this.year;
    };
    RefundHistory.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    RefundHistory.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    RefundHistory.prototype.getMonth = function () {
        return this.month;
    };
    RefundHistory.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    RefundHistory.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    RefundHistory.prototype.getDay = function () {
        return this.day;
    };
    RefundHistory.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    RefundHistory.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    RefundHistory.prototype.getUserId = function () {
        return this.userId;
    };
    RefundHistory.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RefundHistory.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RefundHistory.prototype.getDetail = function () {
        return this.detail;
    };
    RefundHistory.prototype.setDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    RefundHistory.prototype.withDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    RefundHistory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RefundHistory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RefundHistory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RefundHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RefundHistory()
            .withRefundHistoryId(data["refundHistoryId"])
            .withTransactionId(data["transactionId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withUserId(data["userId"])
            .withDetail(Gs2Money2.RefundEvent.fromDict(data["detail"]))
            .withCreatedAt(data["createdAt"]);
    };
    RefundHistory.prototype.toDict = function () {
        var _a;
        return {
            "refundHistoryId": this.getRefundHistoryId(),
            "transactionId": this.getTransactionId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "userId": this.getUserId(),
            "detail": (_a = this.getDetail()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return RefundHistory;
}());
exports.default = RefundHistory;
//# sourceMappingURL=RefundHistory.js.map