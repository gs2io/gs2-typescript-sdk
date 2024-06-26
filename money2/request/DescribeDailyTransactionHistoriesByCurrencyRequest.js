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
var DescribeDailyTransactionHistoriesByCurrencyRequest = /** @class */ (function () {
    function DescribeDailyTransactionHistoriesByCurrencyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.currency = null;
        this.year = null;
        this.month = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getCurrency = function () {
        return this.currency;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getYear = function () {
        return this.year;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getMonth = function () {
        return this.month;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.fromDict = function (data) {
        return new DescribeDailyTransactionHistoriesByCurrencyRequest()
            .withNamespaceName(data["namespaceName"])
            .withCurrency(data["currency"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDailyTransactionHistoriesByCurrencyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "currency": this.getCurrency(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDailyTransactionHistoriesByCurrencyRequest;
}());
exports.default = DescribeDailyTransactionHistoriesByCurrencyRequest;
//# sourceMappingURL=DescribeDailyTransactionHistoriesByCurrencyRequest.js.map