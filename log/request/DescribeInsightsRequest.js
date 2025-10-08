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
var DescribeInsightsRequest = /** @class */ (function () {
    function DescribeInsightsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeInsightsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeInsightsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInsightsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInsightsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeInsightsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInsightsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInsightsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeInsightsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInsightsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInsightsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeInsightsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeInsightsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeInsightsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeInsightsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeInsightsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeInsightsRequest.fromDict = function (data) {
        return new DescribeInsightsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeInsightsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeInsightsRequest;
}());
exports.default = DescribeInsightsRequest;
//# sourceMappingURL=DescribeInsightsRequest.js.map