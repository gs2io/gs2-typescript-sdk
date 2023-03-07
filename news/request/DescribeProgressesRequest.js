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
var DescribeProgressesRequest = /** @class */ (function () {
    function DescribeProgressesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeProgressesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeProgressesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProgressesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProgressesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeProgressesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProgressesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProgressesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeProgressesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProgressesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProgressesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeProgressesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeProgressesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeProgressesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeProgressesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeProgressesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeProgressesRequest.fromDict = function (data) {
        return new DescribeProgressesRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeProgressesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeProgressesRequest;
}());
exports.default = DescribeProgressesRequest;
//# sourceMappingURL=DescribeProgressesRequest.js.map