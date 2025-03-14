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
var DescribeRefundHistoriesByDateRequest = /** @class */ (function () {
    function DescribeRefundHistoriesByDateRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRefundHistoriesByDateRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getYear = function () {
        return this.year;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getMonth = function () {
        return this.month;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getDay = function () {
        return this.day;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRefundHistoriesByDateRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRefundHistoriesByDateRequest.fromDict = function (data) {
        return new DescribeRefundHistoriesByDateRequest()
            .withNamespaceName(data["namespaceName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRefundHistoriesByDateRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRefundHistoriesByDateRequest;
}());
exports.default = DescribeRefundHistoriesByDateRequest;
//# sourceMappingURL=DescribeRefundHistoriesByDateRequest.js.map