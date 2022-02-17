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
exports.DescribeStacksRequest = void 0;
var DescribeStacksRequest = /** @class */ (function () {
    function DescribeStacksRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeStacksRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStacksRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStacksRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStacksRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStacksRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStacksRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStacksRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStacksRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStacksRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStacksRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStacksRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStacksRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStacksRequest.fromDict = function (data) {
        return new DescribeStacksRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeStacksRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeStacksRequest;
}());
exports.DescribeStacksRequest = DescribeStacksRequest;
//# sourceMappingURL=DescribeStacksRequest.js.map