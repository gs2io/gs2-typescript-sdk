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
var DescribeStaminasByUserIdRequest = /** @class */ (function () {
    function DescribeStaminasByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeStaminasByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStaminasByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStaminasByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStaminasByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeStaminasByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStaminasByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStaminasByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeStaminasByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeStaminasByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeStaminasByUserIdRequest.fromDict = function (data) {
        return new DescribeStaminasByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeStaminasByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeStaminasByUserIdRequest;
}());
exports.default = DescribeStaminasByUserIdRequest;
//# sourceMappingURL=DescribeStaminasByUserIdRequest.js.map