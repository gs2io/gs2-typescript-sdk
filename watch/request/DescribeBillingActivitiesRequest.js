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
exports.DescribeBillingActivitiesRequest = void 0;
var DescribeBillingActivitiesRequest = /** @class */ (function () {
    function DescribeBillingActivitiesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.year = null;
        this.month = null;
        this.service = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBillingActivitiesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBillingActivitiesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBillingActivitiesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getYear = function () {
        return this.year;
    };
    DescribeBillingActivitiesRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getMonth = function () {
        return this.month;
    };
    DescribeBillingActivitiesRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getService = function () {
        return this.service;
    };
    DescribeBillingActivitiesRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBillingActivitiesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBillingActivitiesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBillingActivitiesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBillingActivitiesRequest.fromDict = function (data) {
        return new DescribeBillingActivitiesRequest()
            .withYear(data["year"])
            .withMonth(data["month"])
            .withService(data["service"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBillingActivitiesRequest.prototype.toDict = function () {
        return {
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBillingActivitiesRequest;
}());
exports.DescribeBillingActivitiesRequest = DescribeBillingActivitiesRequest;
//# sourceMappingURL=DescribeBillingActivitiesRequest.js.map