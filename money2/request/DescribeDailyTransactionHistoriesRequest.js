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
var DescribeDailyTransactionHistoriesRequest = /** @class */ (function () {
    function DescribeDailyTransactionHistoriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDailyTransactionHistoriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getYear = function () {
        return this.year;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getMonth = function () {
        return this.month;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getDay = function () {
        return this.day;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDailyTransactionHistoriesRequest.fromDict = function (data) {
        return new DescribeDailyTransactionHistoriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDailyTransactionHistoriesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDailyTransactionHistoriesRequest;
}());
exports.default = DescribeDailyTransactionHistoriesRequest;
//# sourceMappingURL=DescribeDailyTransactionHistoriesRequest.js.map