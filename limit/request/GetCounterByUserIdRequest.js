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
var GetCounterByUserIdRequest = /** @class */ (function () {
    function GetCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.userId = null;
        this.counterName = null;
        this.timeOffsetToken = null;
    }
    GetCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    GetCounterByUserIdRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    GetCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetCounterByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetCounterByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetCounterByUserIdRequest.fromDict = function (data) {
        return new GetCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withUserId(data["userId"])
            .withCounterName(data["counterName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "userId": this.getUserId(),
            "counterName": this.getCounterName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetCounterByUserIdRequest;
}());
exports.default = GetCounterByUserIdRequest;
//# sourceMappingURL=GetCounterByUserIdRequest.js.map