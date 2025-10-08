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
var DescribeProjectsRequest = /** @class */ (function () {
    function DescribeProjectsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeProjectsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeProjectsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProjectsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProjectsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeProjectsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProjectsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProjectsRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DescribeProjectsRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeProjectsRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeProjectsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeProjectsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeProjectsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeProjectsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeProjectsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeProjectsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeProjectsRequest.fromDict = function (data) {
        return new DescribeProjectsRequest()
            .withAccountToken(data["accountToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeProjectsRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeProjectsRequest;
}());
exports.default = DescribeProjectsRequest;
//# sourceMappingURL=DescribeProjectsRequest.js.map