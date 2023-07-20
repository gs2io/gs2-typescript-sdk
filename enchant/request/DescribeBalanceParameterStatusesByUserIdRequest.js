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
var DescribeBalanceParameterStatusesByUserIdRequest = /** @class */ (function () {
    function DescribeBalanceParameterStatusesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterStatusesByUserIdRequest.fromDict = function (data) {
        return new DescribeBalanceParameterStatusesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBalanceParameterStatusesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBalanceParameterStatusesByUserIdRequest;
}());
exports.default = DescribeBalanceParameterStatusesByUserIdRequest;
//# sourceMappingURL=DescribeBalanceParameterStatusesByUserIdRequest.js.map