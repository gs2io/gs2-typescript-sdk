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
var GetAccountRequest = /** @class */ (function () {
    function GetAccountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.includeLastAuthenticatedAt = null;
        this.timeOffsetToken = null;
    }
    GetAccountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAccountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAccountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAccountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAccountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAccountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAccountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAccountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAccountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAccountRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetAccountRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAccountRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAccountRequest.prototype.getIncludeLastAuthenticatedAt = function () {
        return this.includeLastAuthenticatedAt;
    };
    GetAccountRequest.prototype.setIncludeLastAuthenticatedAt = function (includeLastAuthenticatedAt) {
        this.includeLastAuthenticatedAt = includeLastAuthenticatedAt;
        return this;
    };
    GetAccountRequest.prototype.withIncludeLastAuthenticatedAt = function (includeLastAuthenticatedAt) {
        this.includeLastAuthenticatedAt = includeLastAuthenticatedAt;
        return this;
    };
    GetAccountRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetAccountRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetAccountRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetAccountRequest.fromDict = function (data) {
        return new GetAccountRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withIncludeLastAuthenticatedAt(data["includeLastAuthenticatedAt"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetAccountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "includeLastAuthenticatedAt": this.getIncludeLastAuthenticatedAt(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetAccountRequest;
}());
exports.default = GetAccountRequest;
//# sourceMappingURL=GetAccountRequest.js.map