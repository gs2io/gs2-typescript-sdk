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
var DescribeResourcesRequest = /** @class */ (function () {
    function DescribeResourcesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeResourcesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeResourcesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeResourcesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeResourcesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeResourcesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeResourcesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeResourcesRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    DescribeResourcesRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DescribeResourcesRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DescribeResourcesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeResourcesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeResourcesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeResourcesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeResourcesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeResourcesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeResourcesRequest.fromDict = function (data) {
        return new DescribeResourcesRequest()
            .withStackName(data["stackName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeResourcesRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeResourcesRequest;
}());
exports.default = DescribeResourcesRequest;
//# sourceMappingURL=DescribeResourcesRequest.js.map