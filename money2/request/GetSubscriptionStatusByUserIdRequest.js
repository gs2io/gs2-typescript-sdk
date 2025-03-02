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
var GetSubscriptionStatusByUserIdRequest = /** @class */ (function () {
    function GetSubscriptionStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.contentName = null;
        this.timeOffsetToken = null;
    }
    GetSubscriptionStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscriptionStatusByUserIdRequest.fromDict = function (data) {
        return new GetSubscriptionStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withContentName(data["contentName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetSubscriptionStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "contentName": this.getContentName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetSubscriptionStatusByUserIdRequest;
}());
exports.default = GetSubscriptionStatusByUserIdRequest;
//# sourceMappingURL=GetSubscriptionStatusByUserIdRequest.js.map