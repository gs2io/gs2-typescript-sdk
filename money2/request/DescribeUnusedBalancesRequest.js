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
var DescribeUnusedBalancesRequest = /** @class */ (function () {
    function DescribeUnusedBalancesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeUnusedBalancesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeUnusedBalancesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeUnusedBalancesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeUnusedBalancesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeUnusedBalancesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeUnusedBalancesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUnusedBalancesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUnusedBalancesRequest.fromDict = function (data) {
        return new DescribeUnusedBalancesRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeUnusedBalancesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeUnusedBalancesRequest;
}());
exports.default = DescribeUnusedBalancesRequest;
//# sourceMappingURL=DescribeUnusedBalancesRequest.js.map