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
var DescribeCleanProgressesRequest = /** @class */ (function () {
    function DescribeCleanProgressesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeCleanProgressesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeCleanProgressesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeCleanProgressesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeCleanProgressesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeCleanProgressesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCleanProgressesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCleanProgressesRequest.fromDict = function (data) {
        return new DescribeCleanProgressesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeCleanProgressesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeCleanProgressesRequest;
}());
exports.default = DescribeCleanProgressesRequest;
//# sourceMappingURL=DescribeCleanProgressesRequest.js.map