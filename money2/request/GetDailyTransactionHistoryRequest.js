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
var GetDailyTransactionHistoryRequest = /** @class */ (function () {
    function GetDailyTransactionHistoryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.currency = null;
    }
    GetDailyTransactionHistoryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDailyTransactionHistoryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDailyTransactionHistoryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDailyTransactionHistoryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getYear = function () {
        return this.year;
    };
    GetDailyTransactionHistoryRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getMonth = function () {
        return this.month;
    };
    GetDailyTransactionHistoryRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getDay = function () {
        return this.day;
    };
    GetDailyTransactionHistoryRequest.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.getCurrency = function () {
        return this.currency;
    };
    GetDailyTransactionHistoryRequest.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    GetDailyTransactionHistoryRequest.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    GetDailyTransactionHistoryRequest.fromDict = function (data) {
        return new GetDailyTransactionHistoryRequest()
            .withNamespaceName(data["namespaceName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withCurrency(data["currency"]);
    };
    GetDailyTransactionHistoryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "currency": this.getCurrency(),
        };
    };
    return GetDailyTransactionHistoryRequest;
}());
exports.default = GetDailyTransactionHistoryRequest;
//# sourceMappingURL=GetDailyTransactionHistoryRequest.js.map