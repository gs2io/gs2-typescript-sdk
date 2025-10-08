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
var DescribeReceiptsRequest = /** @class */ (function () {
    function DescribeReceiptsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeReceiptsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiptsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiptsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiptsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiptsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiptsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiptsRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DescribeReceiptsRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiptsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiptsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiptsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiptsRequest.fromDict = function (data) {
        return new DescribeReceiptsRequest()
            .withAccountToken(data["accountToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeReceiptsRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeReceiptsRequest;
}());
exports.default = DescribeReceiptsRequest;
//# sourceMappingURL=DescribeReceiptsRequest.js.map