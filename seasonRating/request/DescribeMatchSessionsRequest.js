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
var DescribeMatchSessionsRequest = /** @class */ (function () {
    function DescribeMatchSessionsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMatchSessionsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMatchSessionsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMatchSessionsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMatchSessionsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMatchSessionsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMatchSessionsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMatchSessionsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMatchSessionsRequest.fromDict = function (data) {
        return new DescribeMatchSessionsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMatchSessionsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMatchSessionsRequest;
}());
exports.default = DescribeMatchSessionsRequest;
//# sourceMappingURL=DescribeMatchSessionsRequest.js.map