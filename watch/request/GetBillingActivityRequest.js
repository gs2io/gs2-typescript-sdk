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
exports.GetBillingActivityRequest = void 0;
var GetBillingActivityRequest = /** @class */ (function () {
    function GetBillingActivityRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.year = null;
        this.month = null;
        this.service = null;
        this.activityType = null;
    }
    GetBillingActivityRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBillingActivityRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingActivityRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingActivityRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBillingActivityRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingActivityRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingActivityRequest.prototype.getYear = function () {
        return this.year;
    };
    GetBillingActivityRequest.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    GetBillingActivityRequest.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    GetBillingActivityRequest.prototype.getMonth = function () {
        return this.month;
    };
    GetBillingActivityRequest.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    GetBillingActivityRequest.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    GetBillingActivityRequest.prototype.getService = function () {
        return this.service;
    };
    GetBillingActivityRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    GetBillingActivityRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    GetBillingActivityRequest.prototype.getActivityType = function () {
        return this.activityType;
    };
    GetBillingActivityRequest.prototype.setActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    GetBillingActivityRequest.prototype.withActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    GetBillingActivityRequest.fromDict = function (data) {
        return new GetBillingActivityRequest()
            .withYear(data["year"])
            .withMonth(data["month"])
            .withService(data["service"])
            .withActivityType(data["activityType"]);
    };
    GetBillingActivityRequest.prototype.toDict = function () {
        return {
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
        };
    };
    return GetBillingActivityRequest;
}());
exports.GetBillingActivityRequest = GetBillingActivityRequest;
//# sourceMappingURL=GetBillingActivityRequest.js.map