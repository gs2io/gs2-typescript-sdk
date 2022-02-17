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
var DescribeWebSocketSessionsRequest = /** @class */ (function () {
    function DescribeWebSocketSessionsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeWebSocketSessionsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeWebSocketSessionsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeWebSocketSessionsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeWebSocketSessionsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeWebSocketSessionsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeWebSocketSessionsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeWebSocketSessionsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWebSocketSessionsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWebSocketSessionsRequest.fromDict = function (data) {
        return new DescribeWebSocketSessionsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeWebSocketSessionsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeWebSocketSessionsRequest;
}());
exports.default = DescribeWebSocketSessionsRequest;
//# sourceMappingURL=DescribeWebSocketSessionsRequest.js.map