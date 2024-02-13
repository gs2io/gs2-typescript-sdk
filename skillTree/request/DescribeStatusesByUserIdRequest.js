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
var DescribeStatusesByUserIdRequest = /** @class */ (function () {
    function DescribeStatusesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeStatusesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStatusesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStatusesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStatusesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeStatusesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStatusesByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStatusesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStatusesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStatusesByUserIdRequest.fromDict = function (data) {
        return new DescribeStatusesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeStatusesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeStatusesByUserIdRequest;
}());
exports.default = DescribeStatusesByUserIdRequest;
//# sourceMappingURL=DescribeStatusesByUserIdRequest.js.map