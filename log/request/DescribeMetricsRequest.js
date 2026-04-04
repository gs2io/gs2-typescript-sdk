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
var DescribeMetricsRequest = /** @class */ (function () {
    function DescribeMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMetricsRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeMetricsRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeMetricsRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeMetricsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMetricsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMetricsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMetricsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMetricsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMetricsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMetricsRequest.fromDict = function (data) {
        return new DescribeMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMetricsRequest;
}());
exports.default = DescribeMetricsRequest;
//# sourceMappingURL=DescribeMetricsRequest.js.map