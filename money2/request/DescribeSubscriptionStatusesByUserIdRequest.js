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
var DescribeSubscriptionStatusesByUserIdRequest = /** @class */ (function () {
    function DescribeSubscriptionStatusesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    DescribeSubscriptionStatusesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscriptionStatusesByUserIdRequest.fromDict = function (data) {
        return new DescribeSubscriptionStatusesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeSubscriptionStatusesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeSubscriptionStatusesByUserIdRequest;
}());
exports.default = DescribeSubscriptionStatusesByUserIdRequest;
//# sourceMappingURL=DescribeSubscriptionStatusesByUserIdRequest.js.map