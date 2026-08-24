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
var GetBillingsRequest = /** @class */ (function () {
    function GetBillingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.year = null;
        this.month = null;
        this.service = null;
    }
    GetBillingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBillingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBillingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingsRequest.prototype.getYear = function () {
        return this.year;
    };
    GetBillingsRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    GetBillingsRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    GetBillingsRequest.prototype.getMonth = function () {
        return this.month;
    };
    GetBillingsRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    GetBillingsRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    GetBillingsRequest.prototype.getService = function () {
        return this.service;
    };
    GetBillingsRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    GetBillingsRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    GetBillingsRequest.fromDict = function (data) {
        return new GetBillingsRequest()
            .withYear(data["year"])
            .withMonth(data["month"])
            .withService(data["service"]);
    };
    GetBillingsRequest.prototype.toDict = function () {
        return {
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
        };
    };
    return GetBillingsRequest;
}());
exports.default = GetBillingsRequest;
//# sourceMappingURL=GetBillingsRequest.js.map