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
exports.DescribeBillingsRequest = void 0;
var DescribeBillingsRequest = /** @class */ (function () {
    function DescribeBillingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.projectName = null;
        this.year = null;
        this.month = null;
        this.region = null;
        this.service = null;
    }
    DescribeBillingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBillingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBillingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingsRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DescribeBillingsRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeBillingsRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeBillingsRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    DescribeBillingsRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    DescribeBillingsRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    DescribeBillingsRequest.prototype.getYear = function () {
        return this.year;
    };
    DescribeBillingsRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeBillingsRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DescribeBillingsRequest.prototype.getMonth = function () {
        return this.month;
    };
    DescribeBillingsRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeBillingsRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DescribeBillingsRequest.prototype.getRegion = function () {
        return this.region;
    };
    DescribeBillingsRequest.prototype.setRegion = function (region) {
        this.region = region;
        return this;
    };
    DescribeBillingsRequest.prototype.withRegion = function (region) {
        this.region = region;
        return this;
    };
    DescribeBillingsRequest.prototype.getService = function () {
        return this.service;
    };
    DescribeBillingsRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    DescribeBillingsRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    DescribeBillingsRequest.fromDict = function (data) {
        return new DescribeBillingsRequest()
            .withAccountToken(data["accountToken"])
            .withProjectName(data["projectName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withRegion(data["region"])
            .withService(data["service"]);
    };
    DescribeBillingsRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "projectName": this.getProjectName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "region": this.getRegion(),
            "service": this.getService(),
        };
    };
    return DescribeBillingsRequest;
}());
exports.DescribeBillingsRequest = DescribeBillingsRequest;
//# sourceMappingURL=DescribeBillingsRequest.js.map