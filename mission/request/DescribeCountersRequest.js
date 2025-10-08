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
var DescribeCountersRequest = /** @class */ (function () {
    function DescribeCountersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeCountersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeCountersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCountersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCountersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeCountersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCountersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCountersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeCountersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCountersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCountersRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeCountersRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCountersRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCountersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeCountersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCountersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCountersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeCountersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCountersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCountersRequest.fromDict = function (data) {
        return new DescribeCountersRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeCountersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeCountersRequest;
}());
exports.default = DescribeCountersRequest;
//# sourceMappingURL=DescribeCountersRequest.js.map