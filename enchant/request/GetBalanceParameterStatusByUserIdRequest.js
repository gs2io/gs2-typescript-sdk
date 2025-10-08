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
var GetBalanceParameterStatusByUserIdRequest = /** @class */ (function () {
    function GetBalanceParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.timeOffsetToken = null;
    }
    GetBalanceParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBalanceParameterStatusByUserIdRequest.fromDict = function (data) {
        return new GetBalanceParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetBalanceParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetBalanceParameterStatusByUserIdRequest;
}());
exports.default = GetBalanceParameterStatusByUserIdRequest;
//# sourceMappingURL=GetBalanceParameterStatusByUserIdRequest.js.map