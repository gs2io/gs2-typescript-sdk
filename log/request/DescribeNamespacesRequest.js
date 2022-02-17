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
var DescribeNamespacesRequest = /** @class */ (function () {
    function DescribeNamespacesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeNamespacesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeNamespacesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeNamespacesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeNamespacesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeNamespacesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeNamespacesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeNamespacesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeNamespacesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeNamespacesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeNamespacesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeNamespacesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeNamespacesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeNamespacesRequest.fromDict = function (data) {
        return new DescribeNamespacesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeNamespacesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeNamespacesRequest;
}());
exports.default = DescribeNamespacesRequest;
//# sourceMappingURL=DescribeNamespacesRequest.js.map