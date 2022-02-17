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
var DescribeWebSocketSessionsByUserIdRequest = /** @class */ (function () {
    function DescribeWebSocketSessionsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeWebSocketSessionsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWebSocketSessionsByUserIdRequest.fromDict = function (data) {
        return new DescribeWebSocketSessionsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeWebSocketSessionsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeWebSocketSessionsByUserIdRequest;
}());
exports.default = DescribeWebSocketSessionsByUserIdRequest;
//# sourceMappingURL=DescribeWebSocketSessionsByUserIdRequest.js.map