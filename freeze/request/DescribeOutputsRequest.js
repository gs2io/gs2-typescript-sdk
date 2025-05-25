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
var DescribeOutputsRequest = /** @class */ (function () {
    function DescribeOutputsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stageName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeOutputsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeOutputsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeOutputsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeOutputsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeOutputsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeOutputsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeOutputsRequest.prototype.getStageName = function () {
        return this.stageName;
    };
    DescribeOutputsRequest.prototype.setStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    DescribeOutputsRequest.prototype.withStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    DescribeOutputsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeOutputsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeOutputsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeOutputsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeOutputsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeOutputsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeOutputsRequest.fromDict = function (data) {
        return new DescribeOutputsRequest()
            .withStageName(data["stageName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeOutputsRequest.prototype.toDict = function () {
        return {
            "stageName": this.getStageName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeOutputsRequest;
}());
exports.default = DescribeOutputsRequest;
//# sourceMappingURL=DescribeOutputsRequest.js.map