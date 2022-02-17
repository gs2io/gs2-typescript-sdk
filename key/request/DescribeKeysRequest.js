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
var DescribeKeysRequest = /** @class */ (function () {
    function DescribeKeysRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeKeysRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeKeysRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeKeysRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeKeysRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeKeysRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeKeysRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeKeysRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeKeysRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeKeysRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeKeysRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeKeysRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeKeysRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeKeysRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeKeysRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeKeysRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeKeysRequest.fromDict = function (data) {
        return new DescribeKeysRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeKeysRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeKeysRequest;
}());
exports.default = DescribeKeysRequest;
//# sourceMappingURL=DescribeKeysRequest.js.map